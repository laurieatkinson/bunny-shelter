import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { OrdersModule } from './orders/orders.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './home/about.component'; 
import { ShelterComponent } from './bunnies/shelter.component';
import { BunnyComponent } from './bunnies/bunny.component';

@NgModule({
    imports: [BrowserModule, HttpModule, AppRoutingModule, SharedModule, OrdersModule],
    declarations: [AppComponent, AboutComponent, ShelterComponent, BunnyComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
