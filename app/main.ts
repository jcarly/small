import { bootstrap }    from '@angular/platform-browser-dynamic';
import { SmallComponent } from './component/small.component';
import {Component, provide} from '@angular/core';

import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, Router} from '@angular/router-deprecated';
import {HashLocationStrategy, LocationStrategy, Location, APP_BASE_HREF} from '@angular/common';

bootstrap(SmallComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue : '/small/' }),
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);