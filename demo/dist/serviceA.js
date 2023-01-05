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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceA = void 0;
const serviceB_1 = require("./serviceB");
const common_1 = require("@nestjs/common");
let ServiceA = class ServiceA {
    constructor(serviceB) {
        this.serviceB = serviceB;
        console.log('created ServiceA, serviceB is =>', this.serviceB);
    }
};
ServiceA = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [serviceB_1.ServiceB])
], ServiceA);
exports.ServiceA = ServiceA;
//# sourceMappingURL=serviceA.js.map