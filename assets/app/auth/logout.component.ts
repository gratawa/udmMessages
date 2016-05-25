import {Component} from 'angular2/core';


@Component({
    selector: 'my-logout',
    template: `
        <section class="col-md-8 col-md-offset-2">
           <button class="btn btn-anger" (click)="onLogout()">Logout</button>
          
        </section>
    
    
    `
    
    
})

export class LogoutComponent{
    
    onLogout(){
        
    }
}