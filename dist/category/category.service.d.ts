import { CategoryDto } from './dto/category.dto';
import { PrismaService } from 'src/prisma.service';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        _count: {
            products: number;
        };
        image: string;
        sort: number;
        slug: string;
        products: {
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
            show: number;
            recommended: number;
            categoryId: string | null;
            userId: string | null;
        }[];
    }[]>;
    byId(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        _count: {
            products: number;
        };
        image: string;
        sort: number;
        slug: string;
        products: {
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
            show: number;
            recommended: number;
            categoryId: string | null;
            userId: string | null;
        }[];
    }>;
    bySlug(slug: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        _count: {
            products: number;
        };
        image: string;
        sort: number;
        slug: string;
        products: {
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
            show: number;
            recommended: number;
            categoryId: string | null;
            userId: string | null;
        }[];
    }>;
    create(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        sort: number;
    }>;
    update(id: string, dto: CategoryDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        sort: number;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        slug: string;
        image: string;
        sort: number;
    }>;
}
