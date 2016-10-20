import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderFormComponent } from './order-form.component';

const routes: Routes = [
    { path: 'order/:name', component: OrderFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrdersRoutingModule { }