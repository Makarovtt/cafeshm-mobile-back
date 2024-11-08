import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        name: string;
        avatarPath: string;
        phone: string;
        bonuses: number;
        favorites: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string | null;
            volume: string;
            unit: string;
            minportion: number;
            price: number;
            image: string;
            sort: number;
            show: number | null;
            recommended: number | null;
            categoryId: string | null;
            userId: string | null;
        }[];
        orders: {
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
        }[];
        addresses: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            street: string;
            home: string;
            privatehome: boolean | null;
            flat: string | null;
            entrance: string | null;
            floor: string | null;
            nameaddress: string | null;
            userId: string | null;
        }[];
        _count: {
            favorites: number;
            orders: number;
            addresses: number;
        };
    }[]>;
    getById(id: string, selectObject?: Prisma.UserSelect): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        name: string;
        avatarPath: string;
        phone: string;
        bonuses: number;
        favorites: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string | null;
            volume: string;
            unit: string;
            minportion: number;
            price: number;
            image: string;
            sort: number;
            show: number | null;
            recommended: number | null;
            categoryId: string | null;
            userId: string | null;
        }[];
        orders: {
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
        }[];
        addresses: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            street: string;
            home: string;
            privatehome: boolean | null;
            flat: string | null;
            entrance: string | null;
            floor: string | null;
            nameaddress: string | null;
            userId: string | null;
        }[];
        _count: {
            favorites: number;
            orders: number;
            addresses: number;
        };
    }>;
    toggleFavorite(userId: string, productId: string): Promise<{
        message: string;
    }>;
    updateName(id: string, name: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        password: string;
        name: string | null;
        avatarPath: string;
        phone: string;
        bonuses: number;
    }>;
    updatePhone(id: string, phone: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        password: string;
        name: string | null;
        avatarPath: string;
        phone: string;
        bonuses: number;
    }>;
    updateEmail(id: string, email: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        password: string;
        name: string | null;
        avatarPath: string;
        phone: string;
        bonuses: number;
    }>;
    updateBonuses(id: string, bonuses: number): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        password: string;
        name: string | null;
        avatarPath: string;
        phone: string;
        bonuses: number;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        password: string;
        name: string | null;
        avatarPath: string;
        phone: string;
        bonuses: number;
    }>;
}
