import { PrismaService } from 'src/prisma.service';
import { CafeDto } from './dto/cafe.dto';
export declare class CafeService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        address: string;
        sort: number;
        order: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            total: number;
            receiving: string;
            userId: string | null;
            addressId: string | null;
            cafeId: string | null;
        }[];
        _count: {
            order: number;
        };
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
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        address: string;
        sort: number;
        order: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            total: number;
            receiving: string;
            userId: string | null;
            addressId: string | null;
            cafeId: string | null;
        }[];
        _count: {
            order: number;
        };
    }>;
    bySlug(slug: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        address: string;
        sort: number;
        order: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            total: number;
            receiving: string;
            userId: string | null;
            addressId: string | null;
            cafeId: string | null;
        }[];
        _count: {
            order: number;
        };
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
