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
var data_service_1 = require('../services/data.service');
var BunnyComponent = (function () {
    function BunnyComponent(route, router, _dataService) {
        this.route = route;
        this.router = router;
        this._dataService = _dataService;
    }
    BunnyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = Number(params['id']);
            //let id = +params['id']; // (+) converts string 'id' to a number
            _this._dataService.getBunny(id)
                .subscribe(function (bunny) { return _this.bunny = bunny; });
        });
    };
    BunnyComponent.prototype.adoptBunny = function () {
        this.router.navigate(['/order', this.bunny.name]);
    };
    BunnyComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    BunnyComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/bunnies/bunny.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, data_service_1.DataService])
    ], BunnyComponent);
    return BunnyComponent;
}());
exports.BunnyComponent = BunnyComponent;
//# sourceMappingURL=bunny.component.js.map