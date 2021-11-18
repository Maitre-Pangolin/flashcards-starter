import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: {}
};

const cards = createSlice({
  initialState,
  name: "cards",
  reducers: {
    addCard: (state, { payload }) => {
      state.cards[payload.id] = { ...payload };
    }
  }
});

export const { addCard } = cards.actions;
export default cards.reducer;

export const selectAllCards = (state) => state.cards.cards;
