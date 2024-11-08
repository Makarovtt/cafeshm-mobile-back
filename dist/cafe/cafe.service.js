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
exports.CafeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const return_cafe_objects_1 = require("./return-cafe.objects");
const generate_slug_1 = require("../utils/generate-slug");
let CafeService = class CafeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.adressesCafe.findMany({
            select: return_cafe_objects_1.returnCafeObjects,
            orderBy: {
                sort: 'asc'
            }
        });
    }
    async create() {
        return this.prisma.adressesCafe.create({
            data: {
                name: '',
                slug: '',
                address: '',
                sort: 0
            }
        });
    }
    async byId(id) {
        const cafe = await this.prisma.adressesCafe.findUnique({
            where: {
                id
            },
            select: return_cafe_objects_1.returnCafeObjects
        });
        if (!cafe)
            throw new Error('Кафе не найдено');
        return cafe;
    }
    async bySlug(slug) {
        const cafe = await this.prisma.adressesCafe.findUnique({
            where: {
                slug
            },
            select: return_cafe_objects_1.returnCafeObjects
        });
        if (!cafe)
            throw new Error('Кафе не найдено');
        return cafe;
    }
    async update(id, dto) {
        return this.prisma.adressesCafe.update({
            where: {
                id
            },
            data: {
                name: dto.name,
                slug: (0, generate_slug_1.generateSlug)(dto.name),
                address: dto.address,
                sort: dto.sort
            }
        });
    }
    async delete(id) {
        return this.prisma.adressesCafe.delete({
            where: {
                id
            }
        });
    }
};
exports.CafeService = CafeService;
exports.CafeService = CafeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CafeService);
//# sourceMappingURL=cafe.service.js.map