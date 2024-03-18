// rxsclice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fsize: 50,
  color: 'red',
};

const FontSizeReducer = createSlice({
  name: 'FontSizeReducer',
  initialState,
  reducers: {
    changeFontSizeAction: (state, action) => {
      // state.fsize += action.payload;
      state.fsize += action.payload;
    },
  },
});

export const { changeFontSizeAction } = FontSizeReducer.actions;

export default FontSizeReducer.reducer;
