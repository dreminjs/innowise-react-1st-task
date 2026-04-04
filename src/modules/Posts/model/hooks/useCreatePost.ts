import { useCreatePostMutation } from "@modules/Posts/api/queries";
import { TCreatePostSchema } from "../posts.interfaces";
import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { addNotification } from "@modules/Notifications";
import { useTags } from "./useTags";
import { UseFormReset } from "react-hook-form";

export const useCreatePost = (reset: UseFormReset<TCreatePostSchema>) => {
  const { tags, handleAddTag, handleReset } = useTags();

  const [createPost, { isLoading }] = useCreatePostMutation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users.currentUser);
  const handleCreate = async (dto: TCreatePostSchema) => {
    if (tags.length > 1 && user?.id) {
      await createPost({ ...dto, tags, userId: user.id }).finally(() => {
        handleReset();
        reset();
      });
    } else {
      dispatch(
        addNotification({ message: "Пожалуйста, выберите тег", type: "error" }),
      );
    }
  };

  return {
    onCreate: handleCreate,
    isLoading,
    handleAddTag,
    tags,
  };
};
