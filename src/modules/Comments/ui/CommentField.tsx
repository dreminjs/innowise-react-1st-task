import { TCreateCommentForm } from "@modules/Comments/model/comments.interface";
import { UseFormRegister } from "react-hook-form";
import { FC } from "react";
import styles from "./CreateCommentForm/CreateCommentForm.module.css";

interface ICommentFieldProps {
  register: UseFormRegister<TCreateCommentForm>;
  name: keyof TCreateCommentForm;
  error?: string;
}

export const CommentField: FC<ICommentFieldProps> = ({
  register,
  name,
  error,
}) => {
  return (
    <div className={styles.createCommentField}>
      <textarea
        {...register(name)}
        className={styles.textarea}
        placeholder="Write something..."
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
