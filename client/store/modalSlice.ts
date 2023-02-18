import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  goalModal: boolean;
  confirmModal: boolean;
}
const initialState: ModalState = {
  goalModal: false,
  confirmModal: false,
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
    openConfirmModal: (state) => {
      state.confirmModal = true;
      return state;
    },
    closeConfirmModal: (state) => {
      state.confirmModal = false;
      return state;
    },
  },
});

export const {
  openGoalModal,
  closeGoalModal,
  openConfirmModal,
  closeConfirmModal,
} = modalSlice.actions;

export default modalSlice.reducer;
