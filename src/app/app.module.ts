import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { FavoritesComponent } from './features/favorites/favorites.component';
import { SalesComponent } from './features/sales/sales.component';
import { PointOfSaleComponent } from './features/point-of-sale/point-of-sale.component';
import { PurchasesComponent } from './features/purchases/purchases.component';
import { InventoryComponent } from './features/inventory/inventory.component';
import { FinanceComponent } from './features/finance/finance.component';
import { AccountingComponent } from './features/accounting/accounting.component';
import { EmployeesComponent } from './features/employees/employees.component';
import { ReportsComponent } from './features/reports/reports.component';
import { SettingsComponent } from './features/settings/settings.component';
import { SharedModule } from './shared/shared.module';
import { MainBranchComponent } from './features/main-branch/main-branch.component';
import { NotificationsComponent } from './features/notifications/notifications.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiPrefixInterceptor } from './core/interceptors/api-prefix.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    SalesComponent,
    PointOfSaleComponent,
    PurchasesComponent,
    InventoryComponent,
    FinanceComponent,
    AccountingComponent,
    EmployeesComponent,
    ReportsComponent,
    SettingsComponent,
    MainBranchComponent,
    NotificationsComponent,
  ],
  imports: [BrowserModule, SharedModule],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: '.dark-mode',
        },
      },
    }),
    provideHttpClient(withInterceptors([apiPrefixInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
