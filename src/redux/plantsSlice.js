import { createSlice } from '@reduxjs/toolkit';
import { fetchPlantData } from './actions'; // Async thunk

const plantsSlice = createSlice({
  name: 'plants',
  initialState: {
    plantData: [],
  },
  reducers: {
    fetchPlantDataSuccess: (state, action) => {
      state.plantData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlantData.fulfilled, (state, action) => {
      state.plantData = action.payload;
    });
  },
});

export const { fetchPlantDataSuccess } = plantsSlice.actions;
export default plantsSlice.reducer;
