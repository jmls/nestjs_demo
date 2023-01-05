import { Module } from '@nestjs/common';
import { ModuleC } from './moduleC';
import { ServiceB } from './serviceB';

@Module({
  imports: [ModuleC],
  controllers: [],
  providers: [ServiceB],
  exports: [ServiceB],
})
export class ModuleB {}
