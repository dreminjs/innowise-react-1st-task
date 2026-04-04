import { useUpdateCommentMutation } from "@modules/Comments/api/queries";
import { TCreateCommentForm } from "../comments.interface";

export const useUpdateComment = ({
  commentId,
  reset,
}: {
  commentId: number;
  reset: () => void;
}) => {
  const [updateComment, { isLoading }] = useUpdateCommentMutation();

  const handleUpdateComment = async (data: TCreateCommentForm) => {
    await updateComment({ id: commentId, body: data.body });
    reset();
  };

  return { isLoading, handleUpdateComment };
};
