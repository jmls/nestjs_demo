"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleA = void 0;
const moduleB_1 = require("./moduleB");
const common_1 = require("@nestjs/common");
const serviceA_1 = require("./serviceA");
let ModuleA = class ModuleA {
};
ModuleA = __decorate([
    (0, common_1.Module)({
        imports: [moduleB_1.ModuleB],
        controllers: [],
        providers: [serviceA_1.ServiceA],
        exports: [serviceA_1.ServiceA],
    })
], ModuleA);
exports.ModuleA = ModuleA;
//# sourceMappingURL=moduleA.js.map