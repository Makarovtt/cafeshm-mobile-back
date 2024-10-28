"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'https://5.35.87.23:5400',
            'https://5.35.87.23:4200',
            'servermobile.cafeshm.ru:4200'
        ]
    });
    await app.listen(4200);
}
bootstrap();
//# sourceMappingURL=main.js.map