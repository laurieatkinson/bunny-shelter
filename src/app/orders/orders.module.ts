import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderFormComponent } from './order-form.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, OrdersRoutingModule],
    declarations: [OrderFormComponent],
    exports: [OrderFormComponent]
})
export class OrdersModule { }
