"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./home/about.component');
var shelter_component_1 = require('./bunnies/shelter.component');
var bunny_component_1 = require('./bunnies/bunny.component');
var order_form_component_1 = require('./form/order-form.component');
var appRoutes = [
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'shelter',
        component: shelter_component_1.ShelterComponent
    },
    {
        path: 'order/:name',
        component: order_form_component_1.OrderFormComponent
    },
    {
        path: 'shelter/:id',
        component: bunny_component_1.BunnyComponent
    },
    {
        path: '',
        redirectTo: '/shelter',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map