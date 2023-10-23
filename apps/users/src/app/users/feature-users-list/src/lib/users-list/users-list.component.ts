import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListVm } from './users-lists-view-model';
import { UserCartComponent } from "../user-cart/user-cart.component";
import { UsersVm } from '../../../../users-vm';
import { RouterModule } from '@angular/router';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'users-list',
    standalone: true,
    templateUrl: './users-list.component.html',
    styleUrls: ['../users-container/users-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, UserCartComponent, RouterModule]
})
export class UsersListComponent {
  @Input({required: true})
  vm!: UsersListVm

  @Output() deleteUser = new EventEmitter()

  onDeleteUser(id: number) {
    this.deleteUser.emit(id)
  }
}
