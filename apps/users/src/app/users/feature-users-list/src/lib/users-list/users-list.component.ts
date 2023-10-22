import { UsersFacade } from './../../../../data-access/+state/users.facade';
import { deleteUser, loadUsers } from '../../../../data-access/+state/users.actions';
import { UsersEntity } from '../../../../data-access/libs/user.entity';
import { RouterModule } from '@angular/router';

import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'my-app-users-users-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  private readonly usersFacade = inject(UsersFacade);
  users$: Observable<UsersEntity[]> | undefined;
  constructor(private store: Store) {}
  isLoading = true
  
  

  deleteUser(id: number) {
    this.store.dispatch(deleteUser({id}))
  }

  ngOnInit(): void {    
    this.isLoading = true
    this.store.dispatch(loadUsers());
    this.users$ = this.usersFacade.allUsersTest$.pipe(user => user)
    this.isLoading = false
  }
}
