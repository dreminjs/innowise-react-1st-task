import { Pagination } from "@components/Pagination";
import { PostsList } from "./PostsPage/PostsList";
import { useGetPostsByUserId } from "../model/hooks/useGetPostsById";
import { FC } from "react";

interface IUserPostsProps {
  userId: number;
}

export const UserPosts: FC<IUserPostsProps> = ({ userId }) => {
  const { data, total, skip, limit, onChangePage, isError, isLoading } =
    useGetPostsByUserId(userId);

  return (
    <>
      <PostsList
        isError={isError}
        isLoading={isLoading}
        data={data?.posts || []}
      />
      <Pagination
        totalPages={total ? Math.ceil(total / limit) : 0}
        currentPage={skip / limit}
        onPageChange={onChangePage}
      />
    </>
  );
};
