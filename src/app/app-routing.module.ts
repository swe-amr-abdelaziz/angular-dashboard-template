import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { menuRoutes } from '@app/shared/constants/menu-routes';

@NgModule({
  imports: [
    RouterModule.forRoot(
      menuRoutes.map((route) => {
        if (route.path === 'task-management') {
          return {
            path: route.path,
            data: route.data,
            loadChildren: () =>
              import('./features/task-management/task-management.module').then(
                (m) => m.TaskManagementModule,
              ),
          };
        }
        return route as Route;
      }),
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
