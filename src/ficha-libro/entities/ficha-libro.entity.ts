import { Carrera } from "src/carrera/entities/carrera.entity";
import { Editorial } from "src/editorial/entities/editorial.entity";
import { Lenguaje } from "src/lenguaje/entities/lenguaje.entity";
import { Lugar } from "src/lugar/entities/lugar.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tema } from '../../temas/entities/tema.entity';

@Entity()
export class FichaLibro {

    @PrimaryGeneratedColumn()
    id: number;

    //Fk recurso id

    @Column()
    anioPublicacion:number

    @ManyToOne(() => Lugar, (lugar) => lugar.id,{eager:true})
    lugar: Lugar

    @ManyToOne(() => Lenguaje, (lenguaje) => lenguaje.id,{eager:true})
    lenguaje: Lenguaje

    @Column()
    nivelIntelectual: string

    @ManyToOne(() => Carrera, (carrera) => carrera.id,{eager:true})
    carrera: Carrera

    @Column()
    isbn:string

    @Column()
    clasificacionLs:string

    //FK autor
    

    @Column()
    titulo:string

    @Column()
    edicion:string

    @ManyToOne(() => Editorial, (editorial) => editorial.id,{eager:true})
    editorial: Editorial

    @Column()
    paginasdimensiones: string

    //FK tema id
    @ManyToMany(() => Tema, tema => tema.id)
    @JoinTable()
    temas: Tema[]


}
