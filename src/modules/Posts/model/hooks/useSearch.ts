import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { ChangeEvent, useState } from "react";
import { setSearchQuery, setTag } from "../postsSlice";

export const useSearch = (onChangePage: (page: number) => void) => {
  const dispatch = useAppDispatch();

  const { searchQuery, tagQuery } = useAppSelector((state) => state.posts);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
    onChangePage(1);
  };

  const handleSetTag = (tag: string) => {
    dispatch(setTag(tag));
    onChangePage(1);
  };

  return {
    searchQuery,
    tagQuery,
    handleSearch,
    handleSetTag,
  };
};
