import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { Breadcrumb } from 'primeng/breadcrumb';
import { TooltipModule } from 'primeng/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarHeaderComponent } from './components/sidebar/sidebar-header/sidebar-header.component';
import { SidebarMenuComponent } from './components/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarFooterComponent } from './components/sidebar/sidebar-footer/sidebar-footer.component';
import { CommonModule } from '@angular/common';
import { SidebarItemComponent } from './components/sidebar/sidebar-item/sidebar-item.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { UserModule } from './features/user/user.module';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarMenuComponent,
    SidebarFooterComponent,
    SidebarItemComponent,
    BreadcrumbComponent,
    WrapperComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ButtonModule,
    DividerModule,
    Breadcrumb,
    BrowserAnimationsModule,
    TooltipModule,
    UserModule,
  ],
  exports: [LayoutComponent, SidebarItemComponent],
})
export class SharedModule {}
