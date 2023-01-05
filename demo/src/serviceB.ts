import { ServiceC } from './serviceC';

export class ServiceB {
  constructor(private serviceC: ServiceC) {
    console.log('Created Service B : serviceC is =>', this.serviceC);
  }
}
