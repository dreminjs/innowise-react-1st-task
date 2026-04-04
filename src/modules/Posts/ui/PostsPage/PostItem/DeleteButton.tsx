import { useAppDispatch } from "@app/store/hooks";
import { setPostIdToDelete } from "@modules/Posts/model/postsSlice";
import { FC } from "react";

interface IDeleteButtonProps {
  postId: number;
}

export const DeleteButton: FC<IDeleteButtonProps> = ({ postId }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(setPostIdToDelete(postId));
  };

  return <button onClick={handleDelete}>Delete</button>;
};
