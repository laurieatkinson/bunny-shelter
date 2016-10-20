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
var LikeComponent = (function () {
    function LikeComponent() {
        this.anotherLike = new core_1.EventEmitter();
    }
    LikeComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit called.");
    };
    LikeComponent.prototype.ngOnChanges = function () {
        console.log("ngOnChanges called.");
    };
    LikeComponent.prototype.increment = function () {
        this.likes++;
        this.anotherLike.emit(this.likes);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], LikeComponent.prototype, "likes", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LikeComponent.prototype, "anotherLike", void 0);
    LikeComponent = __decorate([
        core_1.Component({
            selector: 'my-like',
            templateUrl: 'app/shared/directives/like.component.html',
            styleUrls: ['app/shared/directives/like.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], LikeComponent);
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.component.js.map