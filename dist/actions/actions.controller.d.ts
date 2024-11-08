import { ActionsService } from './actions.service';
import { ActionDto } from './dto/actions.dto';
export declare class ActionsController {
    private readonly actionsService;
    constructor(actionsService: ActionsService);
    getAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string;
        title: string;
        text: string;
    }[]>;
    getBySlug(slug: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string;
        title: string;
        text: string;
    }>;
    getById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        image: string;
        title: string;
        text: string;
    }>;
    create(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        image: string;
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
