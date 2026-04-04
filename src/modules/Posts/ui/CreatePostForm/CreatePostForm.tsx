import { useCreatePost } from "../../model/hooks/useCreatePost";
import { usePostForm } from "../../model/hooks/usePostForm";
import { TagsList } from "@modules/Tags";
import { PostFormField } from "../PostFormField";
import styles from "./CreatePostForm.module.css";

export const CreatePostForm = () => {
  const { register, handleSubmit, reset } = usePostForm();
  const { onCreate, handleAddTag, tags } = useCreatePost(reset);

  return (
    <form onSubmit={handleSubmit(onCreate)}>
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
