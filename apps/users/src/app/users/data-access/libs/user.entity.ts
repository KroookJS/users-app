import { User } from "./users-dto.model";

export type UsersEntity = Omit<User, 'phone'> & {
  isPhone: boolean | null;
};