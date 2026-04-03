import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { UserCard } from "./UserCard";
import { UserPosts, ConfirmDeletionModal } from "@modules/Posts";

export const MyProfilePage = () => {
  const currentUser = useAppSelector((state) => state.users.currentUser);

  if (!currentUser) return <div>Вас не существует :(</div>;

  return (
    <div>
      <UserCard {...currentUser} id={currentUser?.id} />
      <UserPosts userId={Number(currentUser?.id)} />
      <ConfirmDeletionModal />
    </div>
  );
};
