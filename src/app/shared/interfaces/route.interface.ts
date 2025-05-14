import { Route } from '@angular/router';
import { RoutePosition } from '../enums';

export interface RouteData {
  label: string;
  icon?: string;
  position?: RoutePosition;
  leafRoute?: boolean;
}

export interface AppRoute extends Route {
  data?: RouteData;
  children?: AppRoute[];
  expanded?: boolean;
}
