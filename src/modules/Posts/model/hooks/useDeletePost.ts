import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { setPostIdToDelete } from "../postsSlice";
import { useDeletePostMutation } from "@modules/Posts";

export const useDeletePost = () => {
  const postIdToDelete = useAppSelector((state) => state.posts.postIdToDelete);
  const dispatch = useAppDispatch();
  const [deletePost, { isLoading }] = useDeletePostMutation();

  const handleClose = () => {
    dispatch(setPostIdToDelete(null));
  };

  const handleDelete = async () => {
    if (postIdToDelete) {
      await deletePost(postIdToDelete);
      handleClose();
    }
  };

  return { postIdToDelete, handleDelete, isLoading, handleClose };
};
