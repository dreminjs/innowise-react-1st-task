import { Pagination } from "@components/Pagination";
import { CommentsList } from "./CommentsList";
import { FC } from "react";
import { useGetCommentsByPostId } from "../model/hooks/useGetCommentsByPostId";
import { CreateCommentForm } from "./CreateCommentForm/CreateCommentForm";

interface ICommentsProps {
  postId: number;
}

export const Comments: FC<ICommentsProps> = ({ postId }) => {
  const { data, isLoading, isError, onChangePage, skip, total, limit } =
    useGetCommentsByPostId(postId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Не получилось загрузить комментарии</div>;
  }

  return (
    <div>
      <CreateCommentForm />
      <CommentsList comments={data.comments} />
      <Pagination
        totalPages={total ? Math.ceil(total / limit) - 1 : 0}
        currentPage={skip === 0 ? 1 : skip / limit}
        onPageChange={onChangePage}
      />
    </div>
  );
};
