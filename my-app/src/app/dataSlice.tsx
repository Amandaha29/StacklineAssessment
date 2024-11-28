import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SaleDataPoint {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
  }
  
interface DataState {
  chartData: SaleDataPoint[];
}

const initialState: DataState = {
  chartData: []
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setChartData: (state, action: PayloadAction<SaleDataPoint[]>) => {
      state.chartData = action.payload;
    }
  }
});

export const { setChartData } = dataSlice.actions;
export default dataSlice.reducer;
