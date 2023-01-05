import { ServiceB } from './serviceB';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceA {
  constructor(private serviceB: ServiceB) {
    console.log('created ServiceA, serviceB is =>', this.serviceB);
  }
}
