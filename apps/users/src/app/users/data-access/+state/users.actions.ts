
import { createAction, props } from '@ngrx/store';
import { User } from '../libs/users-dto.model';
import { UsersEntity } from '../libs/user.entity';

export const initUsers = createAction('[Users Page] Init');

export const deleteUser = createAction('[Users Page] Delete User', props<{ id: number }>());
export const deleteUserSuccess = createAction('[Users/Api] Delete User Success', props<{ id: number }>());
export const deleteUserFailed = createAction('[Users/Api] Delete User Failed', props<{ error: any }>());


export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: UsersEntity[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: any }>());
