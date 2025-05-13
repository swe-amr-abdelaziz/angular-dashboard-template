import { HomeComponent } from '@app/features/home/home.component';
import { AppRoute } from '../interfaces';
import { RoutePosition } from '../enums';
import { FavoritesComponent } from '@app/features/favorites/favorites.component';

import { taskManagementRoutes } from '@app/features/task-management/task-management-routing.module';
import { SalesComponent } from '@app/features/sales/sales.component';
import { PointOfSaleComponent } from '@app/features/point-of-sale/point-of-sale.component';
import { PurchasesComponent } from '@app/features/purchases/purchases.component';
import { InventoryComponent } from '@app/features/inventory/inventory.component';
import { FinanceComponent } from '@app/features/finance/finance.component';
import { AccountingComponent } from '@app/features/accounting/accounting.component';
import { EmployeesComponent } from '@app/features/employees/employees.component';
import { ReportsComponent } from '@app/features/reports/reports.component';
import { SettingsComponent } from '@app/features/settings/settings.component';
import { MainBranchComponent } from '@app/features/main-branch/main-branch.component';
import { NotificationsComponent } from '@app/features/notifications/notifications.component';

export const menuRoutes: AppRoute[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { label: 'Home', icon: 'pi pi-home', position: RoutePosition.Main },
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    data: {
      label: 'Favorites',
      icon: 'pi pi-star',
      position: RoutePosition.Main,
    },
  },
  {
    path: 'task-management',
    data: {
      label: 'Task Management',
      icon: 'pi pi-list-check',
      position: RoutePosition.Main,
    },
    children: taskManagementRoutes as AppRoute[],
  },
  {
    path: 'sales',
    component: SalesComponent,
    data: {
      label: 'Sales',
      icon: 'pi pi-chart-bar',
      position: RoutePosition.Main,
    },
  },
  {
    path: 'point-of-sale',
    component: PointOfSaleComponent,
    data: {
      label: 'Point of Sale',
      icon: 'pi pi-calculator',
      position: RoutePosition.Main,
    },
  },
  {
    path: 'purchases',
    component: PurchasesComponent,
    data: {
      label: 'Purchases',
      icon: 'pi pi-shopping-cart',
      position: RoutePosition.Main,
    },
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    data: {
      label: 'Inventory',
      icon: 'pi pi-warehouse',
      position: RoutePosition.Main,
    },
  },
  {
    path: 'finance',
    component: FinanceComponent,
    data: {
      label: 'Finance',
      icon: 'pi pi-credit-card',
      position: RoutePosition.Main,
    },
  },
  {
    path: 'accounting',
    component: AccountingComponent,
    data: {
      label: 'Accounting',
      icon: 'pi pi-book',
      position: RoutePosition.Main,
    },
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    data: {
      label: 'Employees',
      icon: 'pi pi-user',
      position: RoutePosition.Main,
    },
  },
  {
    path: 'reports',
    component: ReportsComponent,
    data: {
      label: 'Reports',
      icon: 'pi pi-file-excel',
      position: RoutePosition.Main,
    },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      label: 'Settings',
      icon: 'pi pi-cog',
      position: RoutePosition.Main,
    },
  },
  {
    path: 'main-branch',
    component: MainBranchComponent,
    data: {
      label: 'Main Branch',
      icon: 'pi pi-shop',
      position: RoutePosition.Secondary,
    },
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    data: {
      label: 'Notifications',
      icon: 'pi pi-bell',
      position: RoutePosition.Secondary,
    },
  },
];
