
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {SignupComponent} from './signup.component';
import {SigninComponent} from './signin.component';
import {LogoutComponent} from './logout.component';

@Component({
    selector: 'my-auth',
    template: `
   <header class="row spacing">
   <nav class="col-md-8 col-md-offset-2">
      <ul class="nav nav-tabs">
        <li><a [routerLink]="['Signup']">Signup</a></li>
         <li><a [routerLink]="['Signin']">Sigin</a></li>
         <li><a [routerLink]="['Logout']">Log Out</a></li>
        </ul>
     </nav>
     </header>
     <div class="row spacing">
       <router-outlet></router-outlet>
     </div>
    `,
    directives:[ROUTER_DIRECTIVES],
    styles:[`
        .router-link-active {
            color: #555;
            cursor:deault;
            background-color: #fff;
            border: 1px solid #ddd
            border-bottom-color: transparent
            
        }
    
    
    `]
    
})

@RouteConfig([
     {path: '/signup', name:'Signup', component: SignupComponent, useAsDefault: true},
     {path: '/signin', name:'Signin', component: SigninComponent},
     {path: '/logout', name:'Logout', component: LogoutComponent},
])

export class AuthenticationComponent{
    
}