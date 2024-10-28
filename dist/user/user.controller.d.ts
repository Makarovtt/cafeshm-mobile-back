import { UserService } from './user.service';
import { EmailDto, NameDto, PhoneDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(): Promise<{
        phone: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        name: string;
        avatarPath: string;
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
            show: number;
            recommended: number;
            categoryId: string | null;
            userId: string | null;
        }[];
        orders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            total: number;
            userId: string | null;
        }[];
        _count: {
            favorites: number;
            orders: number;
        };
    }[]>;
    getProfile(id: string): Promise<{
        phone: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        name: string;
        avatarPath: string;
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
            show: number;
            recommended: number;
            categoryId: string | null;
            userId: string | null;
        }[];
        orders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            total: number;
            userId: string | null;
        }[];
        _count: {
            favorites: number;
            orders: number;
        };
    }>;
    toggleFavorite(id: string, productId: string): Promise<{
        message: string;
    }>;
    updateName(id: string, dto: NameDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        password: string;
        name: string | null;
        avatarPath: string;
        phone: string;
    }>;
    updatePhone(id: string, dto: PhoneDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        password: string;
        name: string | null;
        avatarPath: string;
        phone: string;
    }>;
    updateEmail(id: string, dto: EmailDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string | null;
        password: string;
        name: string | null;
        avatarPath: string;
        phone: string;
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
    }>;
}
