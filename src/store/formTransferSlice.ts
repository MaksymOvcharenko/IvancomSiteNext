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


export const submitFormTransfer = createAsyncThunk(
  'formTransfer/submitFormTransfer',
  async (formData: any) => {
    const response = await fetch('https://ivancom-server.onrender.com/forms/transfer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  }
);

const formTransferSlice = createSlice({
  name: 'formTransfer',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<any>) => {
      state.formData = action.payload;
      localStorage.setItem('formTransferData', JSON.stringify(action.payload));
    },
    clearFormData: (state) => {
      state.formData = null;
      localStorage.removeItem('formTransferData');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitFormTransfer.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitFormTransfer.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.formData = action.payload;
      })
      .addCase(submitFormTransfer.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const { setFormData, clearFormData } = formTransferSlice.actions;

export default formTransferSlice.reducer;
