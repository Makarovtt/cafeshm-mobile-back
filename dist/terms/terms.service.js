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
exports.TermsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const return_terms_objects_1 = require("./return-terms.objects");
const generate_slug_1 = require("../utils/generate-slug");
let TermsService = class TermsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return this.prisma.rules.findMany({
            select: return_terms_objects_1.returnTermsObjects,
            orderBy: {
                id: 'asc'
            }
        });
    }
    async create() {
        return this.prisma.rules.create({
            data: {
                title: '',
                slug: '',
                text: ''
            }
        });
    }
    async byId(id) {
        const term = await this.prisma.rules.findUnique({
            where: {
                id
            },
            select: return_terms_objects_1.returnTermsObjects
        });
        if (!term)
            throw new Error('Документ не найден');
        return term;
    }
    async bySlug(slug) {
        const term = await this.prisma.rules.findUnique({
            where: {
                slug
            },
            select: return_terms_objects_1.returnTermsObjects
        });
        if (!term)
            throw new Error('Документ не найден');
        return term;
    }
    async update(id, dto) {
        return this.prisma.rules.update({
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
        return this.prisma.rules.delete({
            where: {
                id
            }
        });
    }
};
exports.TermsService = TermsService;
exports.TermsService = TermsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TermsService);
//# sourceMappingURL=terms.service.js.map