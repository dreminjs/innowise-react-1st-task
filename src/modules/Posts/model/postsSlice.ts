import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostsStore } from "./posts.interfaces";

const initialState: IPostsStore = {
  tag: "",
  searchQuery: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.tag = "";
    },
    setTag: (state, action: PayloadAction<string>) => {
      if (action.payload === state.tag) {
        state.tag = "";
      } else {
        state.tag = action.payload;
        state.searchQuery = "";
      }
    },
  },
});

export const { setSearchQuery, setTag } = postsSlice.actions;
