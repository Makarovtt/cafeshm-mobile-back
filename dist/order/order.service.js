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
        const total = dto.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const receiving = dto.receiving;
        if (total < 1000) {
            throw new Error('Сумма заказа должна быть более 1000 рублей');
        }
        const order = await this.prisma.order.create({
            data: {
                items: {
                    create: dto.items
                },
                total,
                receiving,
                user: {
                    connect: { id: userId }
                }
            }
        });
        const totalInCents = Math.round(total * 100);
        const paymentIntent = await this.stripe.paymentIntents.create({
            amount: totalInCents,
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true
            },
            description: `Order by userId ${order.userId}`
        });
        return { clientSecret: paymentIntent.client_secret };
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
//# sourceMappingURL=order.service.js.map