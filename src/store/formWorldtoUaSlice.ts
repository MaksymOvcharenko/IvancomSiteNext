// import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import { RootState } from './store';

// interface FormState {
//   formData: any;
//   status: 'idle' | 'loading' | 'succeeded' | 'failed';
//   error: string | null;
// }

// const initialState: FormState = {
//   formData: null,
//   status: 'idle',
//   error: null,
// };

// export const submitFormWorldtoUa = createAsyncThunk(
//   'formWorldtoUa/submitFormWorldtoUa',
//   async (formData: any) => {
//     const response = await fetch('https://ivancom-server.onrender.com/forms/worldtoua', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     return await response.json();
//   }
// );

// const formWorldtoUaSlice = createSlice({
//   name: 'formWorldtoUa',
//   initialState,
//   reducers: {
//     setFormData: (state, action: PayloadAction<any>) => {
//       state.formData = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(submitFormWorldtoUa.pending, (state) => {
//         state.status = 'loading';
//         state.error = null;
//       })
//       .addCase(submitFormWorldtoUa.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.formData = action.payload;
//       })
//       .addCase(submitFormWorldtoUa.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message || 'Something went wrong';
//       });
//   },
// });

// export const { setFormData } = formWorldtoUaSlice.actions;

// export default formWorldtoUaSlice.reducer;
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';

interface FormState {
  formData: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: FormState = {
  formData: typeof window !== "undefined" ? JSON.parse(localStorage.getItem('formData') || 'null') : null,
  status: 'idle',
  error: null,
};


export const submitFormWorldtoUa = createAsyncThunk(
  'formWorldtoUa/submitFormWorldtoUa',
  async (formData: any) => {
    const response = await fetch('https://ivancom-server.onrender.com/forms/worldtoua', {
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

const formWorldtoUaSlice = createSlice({
  name: 'formWorldtoUa',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<any>) => {
      state.formData = action.payload;
      localStorage.setItem('formData', JSON.stringify(action.payload)); // Зберігаємо в localStorage
    },
    clearFormData: (state) => {
      state.formData = null;
      localStorage.removeItem('formData'); // Очищаємо з localStorage
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitFormWorldtoUa.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(submitFormWorldtoUa.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.formData = action.payload;
      })
      .addCase(submitFormWorldtoUa.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const { setFormData, clearFormData } = formWorldtoUaSlice.actions;

export default formWorldtoUaSlice.reducer;
