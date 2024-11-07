import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getAll(): Promise<({
        items: ({
            product: {
                user: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string | null;
                    password: string;
                    name: string | null;
                    avatarPath: string;
                    phone: string;
                    bonuses: number;
                };
                category: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    slug: string;
                    image: string;
                    sort: number;
                };
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                _count: {
                    category: number;
                    user: number;
                    orderItems: number;
                };
                description: string;
                volume: string;
                unit: string;
                image: string;
                categoryId: string;
                minportion: number;
                price: number;
                sort: number;
                show: number;
                recommended: number;
                slug: string;
                userId: string;
                orderItems: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    price: number;
                    orderId: string | null;
                    productId: string;
                }[];
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: string | null;
            productId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        total: number;
        isBonus: boolean | null;
        receiving: string;
        timeready: string;
        userId: string | null;
        addressId: string | null;
        cafeId: string | null;
    })[]>;
    getByUserId(userId: string): Promise<({
        items: ({
            product: {
                user: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string | null;
                    password: string;
                    name: string | null;
                    avatarPath: string;
                    phone: string;
                    bonuses: number;
                };
                category: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    slug: string;
                    image: string;
                    sort: number;
                };
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                _count: {
                    category: number;
                    user: number;
                    orderItems: number;
                };
                description: string;
                volume: string;
                unit: string;
                image: string;
                categoryId: string;
                minportion: number;
                price: number;
                sort: number;
                show: number;
                recommended: number;
                slug: string;
                userId: string;
                orderItems: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    quantity: number;
                    price: number;
                    orderId: string | null;
                    productId: string;
                }[];
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            price: number;
            orderId: string | null;
            productId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        total: number;
        isBonus: boolean | null;
        receiving: string;
        timeready: string;
        userId: string | null;
        addressId: string | null;
        cafeId: string | null;
    })[]>;
    placeOrder(dto: OrderDto, userId: string): Promise<string>;
}
