import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ModuleA } from './moduleA';

@Module({
    imports: [ModuleA],
    controllers: [],
    providers: [AppService]
})
export class AppModule {}
