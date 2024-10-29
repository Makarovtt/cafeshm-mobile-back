import { CafeService } from './cafe.service';
import { CafeDto } from './dto/cafe.dto';
export declare class CafeController {
    private readonly cafeService;
    constructor(cafeService: CafeService);
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
    getBySlug(slug: string): Promise<{
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
    getById(id: string): Promise<{
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
    create(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        address: string;
        sort: number;
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
