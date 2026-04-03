import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { ChangeEvent, useState } from "react";
import { setSearchQuery, setTag } from "./postsSlice";

export const useSearch = () => {
  const dispatch = useAppDispatch();

  const { searchQuery, tag } = useAppSelector((state) => state.posts);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSetTag = (tag: string) => {
    dispatch(setTag(tag));
  };

  return {
    searchQuery,
    tag,
    handleSearch,
    handleSetTag,
  };
};
