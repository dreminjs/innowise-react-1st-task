import { useTags } from "../../model/hooks/useTags";
import { useCreatePost } from "../../model/hooks/useCreatePost";
import { useCreatePostForm } from "../../model/hooks/useCreatePostForm";
import { CreatePostFormField } from "./CreatePostFormField";
import { TagsList } from "@modules/Tags";
import styles from "./CreatePostPage.module.css";

export const CreatePostForm = () => {
  const { register, handleSubmit, reset } = useCreatePostForm();
  const { onCreate, handleAddTag, tags } = useCreatePost(reset);

  return (
    <form onSubmit={handleSubmit(onCreate)}>
      <CreatePostFormField
        name="title"
        label="Title"
        tag={"input"}
        register={register}
      />
      <CreatePostFormField
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
