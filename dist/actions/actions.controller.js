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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const actions_service_1 = require("./actions.service");
const actions_dto_1 = require("./dto/actions.dto");
let ActionsController = class ActionsController {
    constructor(actionsService) {
        this.actionsService = actionsService;
    }
    async getAll() {
        return this.actionsService.getAll();
    }
    async getBySlug(slug) {
        return this.actionsService.bySlug(slug);
    }
    async getById(id) {
        return this.actionsService.byId(id);
    }
    async create() {
        return this.actionsService.create();
    }
    async update(id, dto) {
        return this.actionsService.update(id, dto);
    }
    async delete(id) {
        return this.actionsService.delete(id);
    }
};
exports.ActionsController = ActionsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ActionsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('by-slug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActionsController.prototype, "getBySlug", null);
__decorate([
    (0, common_1.Get)('by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActionsController.prototype, "getById", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(),
    (0, auth_decorator_1.Auth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ActionsController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(':id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, actions_dto_1.ActionDto]),
    __metadata("design:returntype", Promise)
], ActionsController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActionsController.prototype, "delete", null);
exports.ActionsController = ActionsController = __decorate([
    (0, common_1.Controller)('actions'),
    __metadata("design:paramtypes", [actions_service_1.ActionsService])
], ActionsController);
//# sourceMappingURL=actions.controller.js.map