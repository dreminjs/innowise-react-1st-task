import { FC } from "react";
import { Link } from "react-router";
import { DeleteButton } from "./DeleteButton";

interface IActionsProps {
  postId: number;
}

export const Actions: FC<IActionsProps> = ({ postId }) => {
  return (
    <>
      <Link to={`/edit/${postId}`}>Edit</Link>
      <DeleteButton postId={postId} />
    </>
  );
};
