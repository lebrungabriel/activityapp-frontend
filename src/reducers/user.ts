import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  value: {
    token: string | null;
  };
};

const initialState: UserState = {
  value: { token: null },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addTokenToStore: (state: UserState, action: PayloadAction<string>) => {
      state.value.token = action.payload;
    },
    removeTokenFromStore: (state: UserState) => {
      state.value.token = null;
    },
  },
});

export const { addTokenToStore, removeTokenFromStore } = userSlice.actions;
export default userSlice.reducer;
