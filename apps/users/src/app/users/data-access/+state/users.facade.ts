import { Injectable, inject } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as UsersSelectors from './users.selectors'
import * as UsersAction from './users.actions'

@Injectable({providedIn: 'root'})
export class UsersFacade {
  private readonly store = inject(Store);
  
  public readonly allUsersTest$ = this.store.pipe(select(UsersSelectors.selectUsers))
  public readonly status$ = this.store.pipe(select(UsersSelectors.selectStatus))
  
  deleteUser(id: number) {
    this.store.dispatch(UsersAction.deleteUser({ id }))
  }
}