import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home/about.component';
import { ShelterComponent } from './bunnies/shelter.component';
import { BunnyComponent } from './bunnies/bunny.component';
import { OrderFormComponent } from './orders/order-form.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'shelter', component: ShelterComponent },
    { path: 'order/:name', component: OrderFormComponent },
    { path: 'shelter/:id', component: BunnyComponent },
    { path: '', redirectTo: '/shelter', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }