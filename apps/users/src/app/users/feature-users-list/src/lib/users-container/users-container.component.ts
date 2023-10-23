import { UsersFacade } from './../../../../data-access/+state/users.facade';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { UsersEntity } from '../../../../data-access/libs/user.entity';
import * as UsersSelect from '../../../../data-access/+state/users.selectors'
import { Store } from '@ngrx/store';
import { deleteUser, loadUsers } from '../../../../data-access/+state/users.actions';
import { UsersListComponent } from "../users-list/users-list.component";


@Component({
    selector: 'users-container',
    standalone: true,
    templateUrl: './users-container.component.html',
    styleUrls: ['./users-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, UsersListComponent]
})
export class UsersContainerComponent {
  private readonly usersFacade = inject(UsersFacade);
  public users$: Observable<UsersEntity[]> | undefined;
  public readonly status$ = this.store.select(UsersSelect.selectStatus)

  constructor(private store: Store) {}

  onDeleteUser(id: number) {
    this.store.dispatch(deleteUser({id}))
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers())
    this.users$ = this.usersFacade.allUsersTest$.pipe(user => user)
  }
}
