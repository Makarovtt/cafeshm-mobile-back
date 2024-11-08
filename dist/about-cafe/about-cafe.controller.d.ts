import { AboutCafeService } from './about-cafe.service';
import { AboutCafeDto } from './dto/aboutCafe.dto';
export declare class AboutCafeController {
    private readonly aboutCafeService;
    constructor(aboutCafeService: AboutCafeService);
    getAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        text: string;
    }[]>;
    getBySlug(slug: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        text: string;
    }>;
    getById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        text: string;
    }>;
    create(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        text: string;
    }>;
    update(id: string, dto: AboutCafeDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        text: string;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        text: string;
    }>;
}
