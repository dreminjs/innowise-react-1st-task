import { TCreateCommentForm } from "@modules/Comments/model/comments.interface";
import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import styles from "./CreateCommentForm.module.css";

interface ICreateCommentFieldProps {
  register: UseFormRegister<TCreateCommentForm>;
  name: keyof TCreateCommentForm;
  error?: string;
}

export const CreateCommentField: FC<ICreateCommentFieldProps> = ({
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
