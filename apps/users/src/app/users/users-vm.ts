import { UsersEntity } from './data-access/libs/user.entity';

export type UsersVm = Pick<UsersEntity, 'id' | 'name' | 'username' |  "email">