import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS, Router, RouterOutlet} from '@angular/router-deprecated';
import {HashLocationStrategy, LocationStrategy, Location} from '@angular/common';

import { AddressComponent } from './address.component';
import { StepOneComponent } from './step.one.component';

@Component({
  selector: 'small-app',
  template: '<router-outlet></router-outlet>',
  directives: [RouterOutlet, ROUTER_DIRECTIVES],
  providers: [AddressComponent, StepOneComponent]
})

@RouteConfig([
 { path: '/home', component: AddressComponent, name: 'Home', useAsDefault: true },
 { path: '/', redirectTo: ['Home'] },
 { path: '/step-one', component: StepOneComponent, name: 'StepOne' }
 
])

export class SmallComponent { 
  constructor(router: Router,location: Location) {
    //location.go('/home');
  }
}