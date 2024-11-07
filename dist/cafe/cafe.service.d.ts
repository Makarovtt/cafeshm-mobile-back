import { PrismaService } from 'src/prisma.service';
import { CafeDto } from './dto/cafe.dto';
export declare class CafeService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        order: {
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        _count: {
            order: number;
        };
        sort: number;
        slug: string;
        address: string;
    }[]>;
    create(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        address: string;
        sort: number;
    }>;
    byId(id: string): Promise<{
        order: {
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        _count: {
            order: number;
        };
        sort: number;
        slug: string;
        address: string;
    }>;
    bySlug(slug: string): Promise<{
        order: {
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        _count: {
            order: number;
        };
        sort: number;
        slug: string;
        address: string;
    }>;
    update(id: string, dto: CafeDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        address: string;
        sort: number;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        address: string;
        sort: number;
    }>;
}
