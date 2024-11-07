import { CafeService } from './cafe.service';
import { CafeDto } from './dto/cafe.dto';
export declare class CafeController {
    private readonly cafeService;
    constructor(cafeService: CafeService);
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
    getBySlug(slug: string): Promise<{
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
    getById(id: string): Promise<{
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
