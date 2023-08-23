import { Injectable } from '@nestjs/common';
import { CreatePruebaDto } from './prueba/dto/create-prueba.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

}
