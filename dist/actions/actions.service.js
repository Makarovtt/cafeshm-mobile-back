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
exports.ActionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const return_action_objects_1 = require("./return-action.objects");
const generate_slug_1 = require("../utils/generate-slug");
let ActionsService = class ActionsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.actions.findMany({
            select: return_action_objects_1.returnActionObjects,
            orderBy: {
                id: 'asc'
            }
        });
    }
    async create() {
        return this.prisma.actions.create({
            data: {
                title: '',
                slug: '',
                image: '',
                text: ''
            }
        });
    }
    async byId(id) {
        const cafe = await this.prisma.actions.findUnique({
            where: {
                id
            },
            select: return_action_objects_1.returnActionObjects
        });
        if (!cafe)
            throw new Error('Акция не найдена');
        return cafe;
    }
    async bySlug(slug) {
        const cafe = await this.prisma.actions.findUnique({
            where: {
                slug
            },
            select: return_action_objects_1.returnActionObjects
        });
        if (!cafe)
            throw new Error('Акция не найдена');
        return cafe;
    }
    async update(id, dto) {
        return this.prisma.actions.update({
            where: {
                id
            },
            data: {
                title: dto.title,
                slug: (0, generate_slug_1.generateSlug)(dto.title),
                image: dto.image,
                text: dto.text
            }
        });
    }
    async delete(id) {
        return this.prisma.actions.delete({
            where: {
                id
            }
        });
    }
};
exports.ActionsService = ActionsService;
exports.ActionsService = ActionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ActionsService);
//# sourceMappingURL=actions.service.js.map