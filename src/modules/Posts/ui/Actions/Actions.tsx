import { FC } from "react";
import { Link } from "react-router";
import { DeleteButton } from "./DeleteButton";

interface IActionsProps {
  postId: number;
}

export const Actions: FC<IActionsProps> = ({ postId }) => {
  return (
    <>
      <Link to={`/posts/${postId}/edit`}>Edit</Link>
      <DeleteButton postId={postId} />
    </>
  );
};
