import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  goalModal: boolean;
}
const initialState: ModalState = {
  goalModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openGoalModal: (state) => {
      state.goalModal = true;
      return state;
    },
    closeGoalModal: (state) => {
      state.goalModal = false;
      return state;
    },
  },
});

export const { openGoalModal, closeGoalModal } = modalSlice.actions;

export default modalSlice.reducer;
