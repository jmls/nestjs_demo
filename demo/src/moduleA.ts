import { ModuleB } from './moduleB';
import { Module } from '@nestjs/common';
import { ServiceA } from './serviceA';

@Module({
  imports: [ModuleB],
  controllers: [],
  providers: [ServiceA],
  exports: [ServiceA],
})
export class ModuleA {}
