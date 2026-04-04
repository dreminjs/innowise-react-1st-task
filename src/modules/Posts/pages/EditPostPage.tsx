import { EditPostForm } from "../ui/EditPostForm/EditPostForm";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { useGetMeQuery } from "@modules/Users";
import { useGetPostByIdQuery } from "../api/queries";

export default () => {
  const { postId } = useParams<{ postId: string }>();

  const { data: post, isLoading } = useGetPostByIdQuery(Number(postId));

  const { data: currentUser } = useGetMeQuery();

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser?.id !== post?.userId) {
      navigate("/");
    }
  }, [currentUser, post, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Не найден</div>;
  }

  return (
    <div>
      <EditPostForm {...post} />
    </div>
  );
};
