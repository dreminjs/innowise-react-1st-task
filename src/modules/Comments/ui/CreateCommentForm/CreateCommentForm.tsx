import { CreateCommentField } from "./CreateCommentField";
import { useCreateCommentForm } from "../.../../../model/hooks/useCreateCommentForm";
import { useCreateComment } from "@modules/Comments/model/hooks/useCreateComment";
import { useParams } from "react-router";
import styles from "./CreateCommentForm.module.css";

export const CreateCommentForm = () => {
  const { id: postId } = useParams<{ id: string }>();
  const { register, handleSubmit, errors, reset } = useCreateCommentForm();
  const { isLoading, handleCreateComment } = useCreateComment({
    postId: Number(postId),
    reset,
  });

  return (
    <form
      className={styles.createCommentForm}
      onSubmit={handleSubmit(handleCreateComment)}
    >
      <CreateCommentField
        register={register}
        name="body"
        error={errors.body?.message}
      />
      <button type="submit" className={styles.button} disabled={isLoading}>
        {isLoading ? "..." : "Send"}
      </button>
    </form>
  );
};
