import { Injectable } from '@nestjs/common';
import { CreateAnalistaDto } from './dto/create-analista.dto';
import { UpdateAnalistaDto } from './dto/update-analista.dto';
import { Analista } from './entities/analista.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { RenewPassword } from './dto/renewPassword.dto';


@Injectable()
export class AnalistaService {

  constructor(
    @InjectRepository(Analista)
    private analistaRepository: Repository<Analista>,
  ) { }

  async create(createAnalistaDto: CreateAnalistaDto) {


    try {
      const analista = this.analistaRepository.create(createAnalistaDto);
      const resp = await this.analistaRepository.save(analista);
      if (resp)
        return {
          status: true,
          resp,
          message: 'Usuario creado con exito'
        };

    } catch (error) {
      return {
        status: false,
        message: 'El nombre de usuario ya existe, intente con otro'
      }
    }



  }

  async findAll() {
    return await this.analistaRepository.find();;
  }

  findOneId(id: number) {
    const resp = this.analistaRepository.findOneBy({ id });
    return resp;
  }

  findOneByusername(nombreUsuario: string) {
    return this.analistaRepository.findOneBy({ nombreUsuario });
  }

  async update(id: number, UpdateAnalista: UpdateAnalistaDto) {
    const {isActivo} = UpdateAnalista;

    try {
      if (!isActivo) {
        this.analistaRepository.update({ id }, UpdateAnalista);
        return {
          status: true,
          message: 'Usuario deshabilitado con exito'
        }
      }
      else{

        this.analistaRepository.update({ id }, UpdateAnalista);
        return {
          status: true,
          message: 'Usuario actualizado con exito'
  
        }
      }
     
    }
    catch (error) {
      console.log(error);

    }

  }

  //PENDIENTE HASHEAR al actualizar LA CONTRASEÑA
  async updatePassword(id: number, {contrasena}: RenewPassword) {

    
    const user = await this.findOneId(id);
    
   try {

    const salt = bcrypt.genSaltSync();

    user.contrasena = bcrypt.hashSync( contrasena, salt );

    
    //this.analistaRepository.update({id}, contrasena);
     // this.analistaRepository.update({  }, RenewPassword);

    } catch (error) {
      
    }

  }

  remove(id: number) {
    return `This action removes a #${id} analista`;
  }
}
