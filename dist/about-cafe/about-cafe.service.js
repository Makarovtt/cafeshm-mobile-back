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
exports.AboutCafeService = void 0;
const common_1 = require("@nestjs/common");
const return_aboutCafe_1 = require("./return-aboutCafe");
const prisma_service_1 = require("../prisma.service");
const generate_slug_1 = require("../utils/generate-slug");
let AboutCafeService = class AboutCafeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.aboutCafe.findMany({
            select: return_aboutCafe_1.returnAboutCafeObjects,
            orderBy: {
                id: 'asc'
            }
        });
    }
    async create() {
        return this.prisma.aboutCafe.create({
            data: {
                title: '',
                slug: '',
                text: ''
            }
        });
    }
    async byId(id) {
        const term = await this.prisma.aboutCafe.findUnique({
            where: {
                id
            },
            select: return_aboutCafe_1.returnAboutCafeObjects
        });
        if (!term)
            throw new Error('Страница не найдена');
        return term;
    }
    async bySlug(slug) {
        const term = await this.prisma.aboutCafe.findUnique({
            where: {
                slug
            },
            select: return_aboutCafe_1.returnAboutCafeObjects
        });
        if (!term)
            throw new Error('Страница не найдена');
        return term;
    }
    async update(id, dto) {
        return this.prisma.aboutCafe.update({
            where: {
                id
            },
            data: {
                title: dto.title,
                slug: (0, generate_slug_1.generateSlug)(dto.title),
                text: dto.text
            }
        });
    }
    async delete(id) {
        return this.prisma.aboutCafe.delete({
            where: {
                id
            }
        });
    }
};
exports.AboutCafeService = AboutCafeService;
exports.AboutCafeService = AboutCafeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AboutCafeService);
//# sourceMappingURL=about-cafe.service.js.map