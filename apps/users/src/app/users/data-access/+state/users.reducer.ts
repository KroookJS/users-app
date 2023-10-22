import { createReducer, on } from '@ngrx/store';
import * as UserActions from './users.actions'

import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { UsersEntity } from '../libs/user.entity';
import { LoadingStatus } from '../libs/user.loading';

export const USERS_FEATURE_KEY = 'users'

export type UsersErrors = {
  status: number,
  [key: string]: unknown
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UserState extends EntityState<UsersEntity> {
  status: LoadingStatus;
  error: UsersErrors | null;
}

export const usersAdapter: EntityAdapter<UsersEntity> =
  createEntityAdapter<UsersEntity>();

export const initialState: UserState = usersAdapter.getInitialState({
  status: 'init',
  error: null,
  
});


export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => 
    usersAdapter.setAll(users, { ...state, status: 'loaded' as const })
  ),
  on(UserActions.deleteUserSuccess, (state, {id}) =>    
    usersAdapter.removeOne(id, { ...state })
)
)
