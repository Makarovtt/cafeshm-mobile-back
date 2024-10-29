import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getAll(): Promise<({
        items: ({
            product: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                user: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string | null;
                    password: string;
                    name: string | null;
                    avatarPath: string;
                    phone: string;
                };
                _count: {
                    category: number;
                    user: number;
                    orderItems: number;
                };
                name: string;
                slug: string;
                description: string;
                volume: string;
                unit: string;
                minportion: number;
                price: number;
                image: string;
                sort: number;
                show: number;
                recommended: number;
                categoryId: string;
                category: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    slug: string;
                    image: string;
                    sort: number;
                };
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
        receiving: string;
        userId: string | null;
        addressId: string | null;
        cafeId: string | null;
    })[]>;
    getByUserId(userId: string): Promise<({
        items: ({
            product: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                user: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    email: string | null;
                    password: string;
                    name: string | null;
                    avatarPath: string;
                    phone: string;
                };
                _count: {
                    category: number;
                    user: number;
                    orderItems: number;
                };
                name: string;
                slug: string;
                description: string;
                volume: string;
                unit: string;
                minportion: number;
                price: number;
                image: string;
                sort: number;
                show: number;
                recommended: number;
                categoryId: string;
                category: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    name: string;
                    slug: string;
                    image: string;
                    sort: number;
                };
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
        receiving: string;
        userId: string | null;
        addressId: string | null;
        cafeId: string | null;
    })[]>;
    placeOrder(dto: OrderDto, userId: string): Promise<{
        clientSecret: string;
    }>;
}
