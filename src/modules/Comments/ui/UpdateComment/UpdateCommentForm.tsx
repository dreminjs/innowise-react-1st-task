import { CommentField } from "../CommentField";
import styles from "./CreateCommentForm.module.css";
import { FC } from "react";
import { useUpdateComment } from "@modules/Comments/model/hooks/useUpdateComment";
import { useUpdateCommentForm } from "@modules/Comments/model/hooks/useUpdateCommentForm";
import { TCreateCommentForm } from "@modules/Comments/model/comments.interface";
type TUpdateCommentFormProps = {
  commentId: number;
  defaultBody: string;
  onClose: () => void;
};

export const UpdateCommentForm: FC<TUpdateCommentFormProps> = ({
  commentId,
  defaultBody,
  onClose,
}) => {
  const { register, handleSubmit, errors, reset } =
    useUpdateCommentForm(defaultBody);
  const { isLoading, handleUpdateComment } = useUpdateComment({
    commentId,
    reset,
  });

  const onSubmit = async (data: TCreateCommentForm) => {
    await handleUpdateComment(data);
    onClose();
  };

  return (
    <form
      className={styles.updateCommentForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <CommentField
        register={register}
        name="body"
        error={errors.body?.message}
      />
      <div className={styles.actions}>
        <button type="button" className={styles.cancelButton} onClick={onClose}>
          Cancel
        </button>
        <button type="submit" className={styles.button} disabled={isLoading}>
          {isLoading ? "..." : "Save"}
        </button>
      </div>
    </form>
  );
};
