import { Route } from '@angular/router';
import { UsersListComponent } from '@my-app-users/users-list';
import { NxWelcomeComponent } from './nx-welcome.component';


export const appRoutes: Route[] = [
              { path: '', component: NxWelcomeComponent },
              { path: 'users', component: UsersListComponent },
];
