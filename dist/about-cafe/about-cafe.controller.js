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
exports.AboutCafeController = void 0;
const common_1 = require("@nestjs/common");
const about_cafe_service_1 = require("./about-cafe.service");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const aboutCafe_dto_1 = require("./dto/aboutCafe.dto");
let AboutCafeController = class AboutCafeController {
    constructor(aboutCafeService) {
        this.aboutCafeService = aboutCafeService;
    }
    async getAll() {
        return this.aboutCafeService.getAll();
    }
    async getBySlug(slug) {
        return this.aboutCafeService.bySlug(slug);
    }
    async getById(id) {
        return this.aboutCafeService.byId(id);
    }
    async create() {
        return this.aboutCafeService.create();
    }
    async update(id, dto) {
        return this.aboutCafeService.update(id, dto);
    }
    async delete(id) {
        return this.aboutCafeService.delete(id);
    }
};
exports.AboutCafeController = AboutCafeController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AboutCafeController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('by-slug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AboutCafeController.prototype, "getBySlug", null);
__decorate([
    (0, common_1.Get)('by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AboutCafeController.prototype, "getById", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(),
    (0, auth_decorator_1.Auth)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AboutCafeController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, common_1.Put)(':id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, aboutCafe_dto_1.AboutCafeDto]),
    __metadata("design:returntype", Promise)
], AboutCafeController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Delete)(':id'),
    (0, auth_decorator_1.Auth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AboutCafeController.prototype, "delete", null);
exports.AboutCafeController = AboutCafeController = __decorate([
    (0, common_1.Controller)('about-cafe'),
    __metadata("design:paramtypes", [about_cafe_service_1.AboutCafeService])
], AboutCafeController);
//# sourceMappingURL=about-cafe.controller.js.map