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
var ShelterComponent = (function () {
    function ShelterComponent(router, _dataService) {
        this.router = router;
        this._dataService = _dataService;
        this.pageTitle = 'Show me the bunnies';
        this.maxAge = 10;
        this.shelterRating = 85;
        this.errorMessage = '';
    }
    ShelterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getBunnies()
            .subscribe(function (bunnies) { return _this.bunnies = bunnies; }, function (error) { return _this.errorMessage = error; });
    };
    ShelterComponent.prototype.hide = function (id) {
        var selectedBunnies = this.bunnies.filter(function (bunny) {
            return bunny.id == id;
        });
        if (selectedBunnies.length > 0) {
            selectedBunnies[0].hidden = true;
        }
    };
    ShelterComponent.prototype.showAll = function () {
        this.bunnies.forEach(function (bunny) {
            bunny.hidden = false;
        });
    };
    ShelterComponent.prototype.updateMostPopularBunny = function (bunny) {
        bunny.likes++;
        var maxLikes = 0;
        var mostPopularBunny;
        this.bunnies.forEach(function (b) {
            b.isMostPopular = false;
            if (b.likes > maxLikes) {
                maxLikes = b.likes;
                mostPopularBunny = b;
            }
        });
        if (mostPopularBunny) {
            mostPopularBunny.isMostPopular = true;
        }
    };
    ShelterComponent.prototype.onSelect = function (bunny) {
        this.router.navigate(['/shelter', bunny.id]);
    };
    ShelterComponent = __decorate([
        core_1.Component({
            selector: 'my-shelter',
            templateUrl: 'app/bunnies/shelter.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService])
    ], ShelterComponent);
    return ShelterComponent;
}());
exports.ShelterComponent = ShelterComponent;
//# sourceMappingURL=shelter.component.js.map