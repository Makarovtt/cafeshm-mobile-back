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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const return_product_object_1 = require("../product/return-product.object");
const stripe_1 = require("stripe");
const console_1 = require("console");
const rxjs_1 = require("rxjs");
let OrderService = class OrderService {
    constructor(prisma) {
        this.prisma = prisma;
        this.stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY);
    }
    async getAll() {
        return this.prisma.order.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                items: {
                    include: {
                        product: {
                            select: return_product_object_1.returnProductObject
                        }
                    }
                }
            }
        });
    }
    async getByUserId(userId) {
        return this.prisma.order.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            include: {
                items: {
                    include: {
                        product: {
                            select: return_product_object_1.returnProductObject
                        }
                    }
                }
            }
        });
    }
    async placeOrder(dto, userId) {
        const total = dto.total;
        const isBonus = dto.isBonus;
        const receiving = dto.receiving;
        const totalBonus = dto.totalBonus;
        let timeready = '';
        if (dto.timeready.value === 'now') {
            timeready = dto.timeready.value;
        }
        else {
            timeready = dto.timeready.day + ' ' + dto.timeready.time;
        }
        const order = await this.prisma.$transaction([
            this.prisma.order.create({
                data: {
                    items: {
                        create: dto.items
                    },
                    total,
                    isBonus,
                    receiving,
                    timeready,
                    user: {
                        connect: { id: userId }
                    },
                    addressCafe: {
                        connect: { id: dto.cafeId }
                    }
                }
            }),
            this.prisma.adresses.create({
                data: {
                    street: dto.userInfo.street,
                    home: dto.userInfo.home,
                    privatehome: dto.userInfo.privatehome,
                    flat: dto.userInfo.flat,
                    entrance: dto.userInfo.entrance,
                    floor: dto.userInfo.floor,
                    user: {
                        connect: { id: userId }
                    }
                }
            }),
            this.prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    bonuses: isBonus
                        ? { decrement: totalBonus }
                        : { increment: dto.addBonus }
                }
            })
        ]);
        if (order)
            return 'ok';
        (0, rxjs_1.throwError)(console_1.error);
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
//# sourceMappingURL=order.service.js.map