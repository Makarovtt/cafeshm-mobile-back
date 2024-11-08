import { UserService } from './user.service';
import { BonusesDto, EmailDto, NameDto, PhoneDto } from './dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
    getProfile(id: string): Promise<{
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
        bonuses: number;
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
        bonuses: number;
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
        bonuses: number;
    }>;
    updateBonuses(id: string, dto: BonusesDto): Promise<{
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
