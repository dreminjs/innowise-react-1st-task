import { Comments } from "@modules/Comments/ui/Comments";
import { Post } from "../ui/PostPage/Post";
import { useParams } from "react-router";

export default () => {
  const { id: postId } = useParams<{ id: string }>();

  if (!postId) return null;

  return (
    <div>
      <Post postId={Number(postId)} />
      <Comments postId={Number(postId)} />
    </div>
  );
};
