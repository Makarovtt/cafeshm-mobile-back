import { PrismaService } from 'src/prisma.service';
import { ActionDto } from './dto/actions.dto';
export declare class ActionsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string;
        title: string;
        text: string;
    }[]>;
    create(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        image: string;
        text: string;
    }>;
    byId(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string;
        title: string;
        text: string;
    }>;
    bySlug(slug: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string;
        title: string;
        text: string;
    }>;
    update(id: string, dto: ActionDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        image: string;
        text: string;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        image: string;
        text: string;
    }>;
}
