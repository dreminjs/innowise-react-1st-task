import { useCreateCommentMutation } from "@modules/Comments/api/queries";
import { TCreateCommentForm } from "../comments.interface";
import { useGetMeQuery } from "@modules/Users";
import { UseFormReset } from "react-hook-form";

interface IArgs {
  postId: number;
  reset: UseFormReset<TCreateCommentForm>;
}

export const useCreateComment = ({ postId, reset }: IArgs) => {
  const [createComment, { isLoading }] = useCreateCommentMutation();
  const { data: user } = useGetMeQuery();
  const handleCreateComment = (data: TCreateCommentForm) => {
    createComment({
      body: data.body,
      postId: postId,
      userId: user!.id,
    }).finally(() => reset());
  };

  return {
    isLoading,
    handleCreateComment,
  };
};
