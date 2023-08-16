
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectClient } from 'nest-mysql';
import { Connection } from 'mysql2';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
  constructor() {}
  
  create(createUserDto: CreateUserDto){
    /*try{
      const user = await this.connection.query('INSERT INTO Analista (Nombre, EsAdmin, NombreUsuario, Contrasena, Activo) VALUES (?,?,?,?,?)'
      [createUserDto.Nombre, createUserDto.EsAdmin, createUserDto.NombreUsuario, createUserDto.Contrasena, 1]
    );
      return user;
  }
    catch(err){
      console.log(err);
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }*/
    return `This action returns all users`;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}