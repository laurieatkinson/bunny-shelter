"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var OrderFormComponent = (function () {
    function OrderFormComponent(route) {
        this.route = route;
        this.submitted = false;
        this.active = true;
        this.order = {
            ownerName: "",
            ownerEmail: "",
            bunnyName: ""
        };
    }
    OrderFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.order.bunnyName = params['name'];
        });
    };
    OrderFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    OrderFormComponent.prototype.newOrder = function () {
        var _this = this;
        this.order = {
            ownerName: "",
            ownerEmail: "",
            bunnyName: ""
        };
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    OrderFormComponent = __decorate([
        core_1.Component({
            selector: 'order-form',
            templateUrl: 'app/orders/order-form.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], OrderFormComponent);
    return OrderFormComponent;
}());
exports.OrderFormComponent = OrderFormComponent;
//# sourceMappingURL=order-form.component.js.map