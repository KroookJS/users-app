import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersVm } from '../../../../users-vm';

@Component({
  selector: 'user-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-cart.component.html',
  styleUrls: ['../users-container/users-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCartComponent {
  @Input({required: true})
  user!: UsersVm

  @Output() deleteUser = new EventEmitter()

  onDeleteUser(id:number) {
    this.deleteUser.emit()
  }
}
