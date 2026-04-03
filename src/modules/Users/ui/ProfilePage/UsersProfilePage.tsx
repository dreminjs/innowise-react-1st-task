import { useGetUserQuery } from "../../api/queries";
import { useParams } from "react-router";
import { UserCard } from "./UserCard";
import { UserPosts } from "@modules/Posts";

export const UsersProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: user, isLoading } = useGetUserQuery(Number(id));

  return (
    <div>
      {user && !isLoading ? (
        <>
          <UserCard {...user} />
          <UserPosts userId={Number(id)} />
        </>
      ) : (
        <div>Такого пользователя не существует</div>
      )}
    </div>
  );
};
