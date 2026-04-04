import { UseFormRegister } from "react-hook-form";
import { TCreatePostSchema } from "../../model/posts.interfaces";
import { FC } from "react";
import styles from "./CreatePostPage.module.css";

interface ICreatePostFormFieldProps {
  name: keyof TCreatePostSchema;
  label: string;
  tag: "input" | "textarea";
  register: UseFormRegister<TCreatePostSchema>;
  error?: string;
}

export const CreatePostFormField: FC<ICreatePostFormFieldProps> = ({
  name,
  label,
  tag: Tag,
  register,
  error,
}) => {
  return (
    <div className={styles.createPostField}>
      <label className={styles.createPostLabel} htmlFor={name}>
        {label}
      </label>
      <Tag id={name} className={styles[Tag]} {...register(name)} />
      {error && <span className={styles.createPostError}>{error}</span>}
    </div>
  );
};
