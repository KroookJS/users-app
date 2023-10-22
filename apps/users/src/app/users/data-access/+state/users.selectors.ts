import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, usersAdapter } from './users.reducer'

export const selectUserState = createFeatureSelector<UserState>('users');
const { selectAll, selectEntities } = usersAdapter.getSelectors();

export const selectUsers = createSelector(
  selectUserState,
  (state: UserState) => selectAll(state)
);