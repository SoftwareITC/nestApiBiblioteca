import { IsNumber, IsOptional } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Editorial {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    nombre: string;

    @Column()
    direccion: string;

    @Column()
    @IsNumber()
    telefono: number;

    @Column()
    email: string;

}
