import { Component } from '@angular/core';
import './rxjs-operators';
import { DataService } from './services/data.service';

@Component({
    selector: 'my-app',
    template: `<h1>My Bunny Adoption App</h1>
        <nav class='navbar'>
            <div class='container-fluid'>
                <ul class='nav nav-pills'>
                    <li><a [routerLink]="['/shelter']" routerLinkActive="active">Bunny Shelter</a></li>
                    <li><a [routerLink]="['/about']" routerLinkActive="active">About</a></li>
                </ul>
            </div>
        </nav>
        <router-outlet></router-outlet>
    `,
    providers: [DataService]
})
export class AppComponent {
}