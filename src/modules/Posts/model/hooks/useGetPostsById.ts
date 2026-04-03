import { useGetPostsByUserIdQuery } from "@modules/Posts";
import { useState } from "react";

export const useGetPostsByUserId = (userId: number) => {
  const limit = 10;
  const [skip, setSkip] = useState(0);
  const { data, isLoading, isError } = useGetPostsByUserIdQuery({
    skip,
    limit,
    userId,
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
