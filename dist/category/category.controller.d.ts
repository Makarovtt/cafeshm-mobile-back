import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
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
    getById(id: string): Promise<{
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
    getBySlug(slug: string): Promise<{
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
