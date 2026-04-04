import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostsStore } from "./posts.interfaces";
import { TSlug } from "@modules/Tags";

const initialState: IPostsStore = {
  tagQuery: "",
  searchQuery: "",
  postIdToDelete: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.tagQuery = "";
    },
    setTag: (state, action: PayloadAction<string>) => {
      if (action.payload === state.tagQuery) {
        state.tagQuery = "";
      } else {
        state.tagQuery = action.payload;
        state.searchQuery = "";
      }
    },
    setPostIdToDelete: (state, action: PayloadAction<number | null>) => {
      state.postIdToDelete = action.payload;
    },
  },
});

export const { setSearchQuery, setTag, setPostIdToDelete } = postsSlice.actions;
