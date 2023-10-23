import { Route } from '@angular/router';

import { NxWelcomeComponent } from './nx-welcome.component';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { UsersContainerComponent } from './users/feature-users-list/src/lib/users-container/users-container.component';


export const appRoutes: Route[] = [
              { path: '', component: NxWelcomeComponent },
              { path: 'users', component: UsersContainerComponent },
];
