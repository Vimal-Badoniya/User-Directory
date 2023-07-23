import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("", async () => {
  const response = await fetch("https://panorbit.in/api/users.json");
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    currentUser: {},
    chatWith: {},
  },
  reducers: {
    setCurrentUser: (state, action) => {
      console.log("set currect user");
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    setChatWith: (state, action) => {
      return {
        ...state,
        chatWith: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      return {
        ...state,
        allUsers: action.payload.users,
      };
    });
  },
});

export const { setCurrentUser, setChatWith} = userSlice.actions;
export default userSlice.reducer;
