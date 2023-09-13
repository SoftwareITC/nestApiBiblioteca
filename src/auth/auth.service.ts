import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUserDto } from './dto/login-user.dto';
import { AnalistaService } from 'src/analista/analista.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {

    constructor(
        private readonly analistaService: AnalistaService,
        private readonly jwtService: JwtService
    ) { }


    async login({ nombreUsuario, contrasena }: LoginUserDto) {
        const user = await this.analistaService.findOneByusername(nombreUsuario);

        if (!user) {
            throw new UnauthorizedException("Usuario no escontrado");
        }

        const isPasswordValid = await bcrypt.compare(contrasena,user.contrasena);

        if (!isPasswordValid) {
            throw new UnauthorizedException("Contraseña incorrecta");

        }

        const payload = { user: user.nombreUsuario, sub: user.id};
        const token = await this.jwtService.signAsync(payload)

        return {
            token,
            nombreUsuario: user.nombre,
            message: "Sesión iniciada correctamente"
        }
    }


}


