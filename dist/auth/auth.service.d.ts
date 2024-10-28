import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    login(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            phone: string;
        };
    }>;
    getNewTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            phone: string;
        };
    }>;
    register(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: string;
            phone: string;
        };
    }>;
    private issueTokens;
    private returnUserFields;
    private validateUser;
}
