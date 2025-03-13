import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';

interface FormState {
  formData: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: FormState = {
  formData: typeof window !== "undefined" ? JSON.parse(localStorage.getItem('formTransferData') || 'null') : null,
  status: 'idle',
  error: null,
};


export const submitAnimals = createAsyncThunk(
  'formTransfer/submitAnimals',
  async (formData: any) => {
     const response = await fetch("https://ivancom-server.onrender.com/forms/animals", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  }
);

const formAnimalsSlice = createSlice({
  name: 'formAnimalsfer',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<any>) => {
      state.formData = action.payload;
      localStorage.setItem('formAnimalsData', JSON.stringify(action.payload));
    },
    clearFormData: (state) => {
      state.formData = null;
      localStorage.removeItem('formAnimalsData');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitAnimals.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitAnimals.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.formData = action.payload;
      })
      .addCase(submitAnimals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
    
  },
});

export const { setFormData, clearFormData } = formAnimalsSlice.actions;

export default formAnimalsSlice.reducer;
