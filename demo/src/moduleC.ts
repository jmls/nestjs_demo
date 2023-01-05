import { Module } from '@nestjs/common';
import { ServiceC } from './serviceC';

@Module({
  imports: [],
  providers: [ServiceC],
  exports: [ServiceC],
})
export class ModuleC {}
