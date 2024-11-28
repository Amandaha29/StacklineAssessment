import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PartialSaleDataPoint {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
  }
  
interface DataState {
  chartData: PartialSaleDataPoint[];
}

const initialState: DataState = {
  chartData: []
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setChartData: (state, action: PayloadAction<PartialSaleDataPoint[]>) => {
      state.chartData = action.payload;
    }
  }
});

export const { setChartData } = dataSlice.actions;
export default dataSlice.reducer;
