/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceC {
  constructor() {
    console.log('created Service C');
  }
}
