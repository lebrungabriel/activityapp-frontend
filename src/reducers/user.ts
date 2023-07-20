import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  value: {
    token: string | null;
    userId: string | null;
  };
};

const initialState: UserState = {
  value: { token: null, userId: null },
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
    addUserIdToStore: (state: UserState, action: PayloadAction<string>) => {
      state.value.userId = action.payload;
    },
  },
});

export const { addTokenToStore, removeTokenFromStore, addUserIdToStore } =
  userSlice.actions;
export default userSlice.reducer;
