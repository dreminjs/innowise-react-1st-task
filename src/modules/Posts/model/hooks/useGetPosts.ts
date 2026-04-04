import { useAppSelector } from "@app/store/hooks";
import { useGetPostsQuery } from "../../api/queries";
import { useState } from "react";

export const useGetPosts = () => {
  const limit = 10;
  const [skip, setSkip] = useState(0);
  const { searchQuery, tagQuery } = useAppSelector((state) => state.posts);
  const { data, isLoading, isError } = useGetPostsQuery({
    q: searchQuery,
    tag: tagQuery,
    skip,
    limit,
  });

  const handleChangePage = (page: number) => {
    setSkip(page * limit);
  };

  return {
    onChangePage: handleChangePage,
    data,
    total: data?.total,
    skip,
    limit,
    isLoading,
    isError,
  };
};
