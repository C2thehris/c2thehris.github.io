import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    open: false,
    refs: [],
    refMap: {}
  },
  reducers: {
    toggleMenu: (state) => {
      state.open = !state.open;
    },
    addNav: (state, target) => {
      if (!state.refMap[target.payload]) {
        state.refs.push(target.payload);
        state.refMap[target.payload] = true;
      }
    }
  }
});

export const { toggleMenu, addNav } = menuSlice.actions;

export default menuSlice.reducer;
