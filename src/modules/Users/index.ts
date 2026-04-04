export { usersApi, useGetMeQuery } from "./api/queries";
export { type IUser } from "./model/users.interface";
export {
  usersSlice,
  setIsLoading,
  setCurrentUser,
  setIsError,
  setLogout,
} from "./model/userSlice";
export { logoutAction } from "./model/actions";
export { USERS_TAG } from "./model/constants";
export { GET_ME_TAG } from "./model/constants";
export { MyProfilePage } from "./ui/ProfilePage/MyProfilePage/MyProfilePage";
export { UsersProfilePage } from "./ui/ProfilePage/UserProfilePage/UserProfilePage";
export * from "./api/queries";
