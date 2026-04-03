import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITagsState, TSlug } from "./tags.interface";

const initialState: ITagsState = {
  tag: null,
};

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    setTag: (state, action: PayloadAction<TSlug>) => {
      state.tag = action.payload;
    },

    removeTag: (state) => {
      state.tag = null;
    },
  },
});
