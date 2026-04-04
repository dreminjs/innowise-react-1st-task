import { usePostForm } from "../../model/hooks/usePostForm";
import { TagsList } from "@modules/Tags";
import { PostFormField } from "../PostFormField";
import { IPost } from "@modules/Posts/model/posts.interfaces";
import { useEditPost } from "@modules/Posts/model/hooks/useEditPost";
import { FC } from "react";
import styles from "./EditPostForm.module.css";

type TEditPostFormProps = IPost;

export const EditPostForm: FC<TEditPostFormProps> = ({
  id,
  title,
  body,
  tags: postTags,
}) => {
  const { register, handleSubmit } = usePostForm({ title, body });
  const { onEdit, handleAddTag, tags } = useEditPost({
    choosedTags: postTags,
    postId: id,
  });

  return (
    <form onSubmit={handleSubmit(onEdit)}>
      <PostFormField
        name="title"
        label="Title"
        tag={"input"}
        register={register}
      />
      <PostFormField
        name="body"
        label="Content"
        tag={"textarea"}
        register={register}
      />
      <div className={styles.tags}>
        <h3>Тэги:</h3>
        <TagsList onTagClick={handleAddTag} choosedTags={tags} />
      </div>
      <button className={styles.submitButton} type="submit">
        Отправить
      </button>
    </form>
  );
};
