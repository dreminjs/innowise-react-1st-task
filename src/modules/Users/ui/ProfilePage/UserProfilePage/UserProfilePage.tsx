import { useParams } from "react-router";
import { UserCard } from "../UserCard/UserCard";
import { UserPosts } from "@modules/Posts";
import { useGetUserQuery } from "@modules/Users";

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
      {isLoading && <div>Загрузка...</div>}
    </div>
  );
};
