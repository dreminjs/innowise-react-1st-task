import { FC } from "react";
import { IComment } from "../model/comments.interface";
import { CommentsItem } from "./CommentsItem";
import { useGetMeQuery } from "@modules/Users";

interface ICommentsListProps {
  comments: IComment[];
}

export const CommentsList: FC<ICommentsListProps> = ({ comments }) => {
  const { data: currentUser } = useGetMeQuery();

  return (
    <ul>
      {comments.map((comment) => (
        <CommentsItem
          key={comment.id}
          {...comment}
          currentUserId={currentUser?.id}
        />
      ))}
    </ul>
  );
};
