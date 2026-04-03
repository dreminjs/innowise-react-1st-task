import { useGetUserQuery } from "../../api/queries";
import { useParams } from "react-router";
import { UserCard } from "./UserCard";

export const UsersProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: user, isLoading } = useGetUserQuery(Number(id));

  return (
    <div>
      {user && !isLoading ? (
        <UserCard {...user} />
      ) : (
        <div>Такого пользователя не существует</div>
      )}
    </div>
  );
};
