import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello there World!';
  }

  getHi(): string {
    return 'Hi there World!';
  } 
}
