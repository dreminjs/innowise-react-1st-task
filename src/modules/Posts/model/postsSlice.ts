import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostsStore } from "./posts.interfaces";

const initialState: IPostsStore = {
  tag: "",
  searchQuery: "",
  postIdToDelete: null,
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
    setPostIdToDelete: (state, action: PayloadAction<number | null>) => {
      state.postIdToDelete = action.payload;
    },
  },
});

export const { setSearchQuery, setTag, setPostIdToDelete } = postsSlice.actions;
