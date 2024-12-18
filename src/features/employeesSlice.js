import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
  const response = await axios.get('https://restful-api.dev/');
  return response.data;
});

const employeesSlice = createSlice({
  name: 'employees',
  initialState: { list: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchEmployees.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default employeesSlice.reducer;
