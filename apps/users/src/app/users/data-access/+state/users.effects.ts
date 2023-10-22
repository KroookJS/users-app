import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import { EMPTY, of  } from 'rxjs';
import * as UserActions from './users.actions';

import { UserService } from '../users.service';
import { usersDTOAdapter } from '../libs/users-dto.adapter';


@Injectable()
export class UsersEffects {
  
  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadUsers),
    switchMap(() => this.userService.getUsers()
      .pipe(
        /* map((user) => usersDTOAdapter.DTOtoEntity(user)), ??? */
        map(users => UserActions.loadUsersSuccess({ 
          users: users.map(user => usersDTOAdapter.DTOtoEntity(user)) 
        })),
        catchError(() => EMPTY)
      ))
    )
  );
  
  deleteUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.deleteUser),
    switchMap(({ id }) => this.userService.deleteUsers(id)
      .pipe(
        map(() => UserActions.deleteUserSuccess({id})),
        catchError((error) => {
          console.error('Error', error);
          return of(UserActions.deleteUserFailed({ error }))
        })
      ))
    )
  );
  

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
