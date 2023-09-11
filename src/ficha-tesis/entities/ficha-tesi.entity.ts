import { Autor } from "src/autor/entities/autor.entity";
import { Carrera } from "src/carrera/entities/carrera.entity";
import { EjemplarTesi } from "src/ejemplar-tesis/entities/ejemplar-tesi.entity";
import { Lenguaje } from "src/lenguaje/entities/lenguaje.entity";
import { Lugar } from "src/lugar/entities/lugar.entity";
import { Tema } from "src/temas/entities/tema.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FichaTesi {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fechaPublicacion:string;

    @ManyToOne(() => Lugar, (lugar) => lugar.id,{eager:true})
    lugar: Lugar

    @ManyToOne(() => Lenguaje, (lenguaje) => lenguaje.id,{eager:true})
    lenguaje: Lenguaje

    @ManyToOne(() => Carrera, (carrera) => carrera.id,{eager:true})
    carrera: Carrera

    @Column()
    cronologico: string;

    @Column()
    clasificacionLocal: string;

    @ManyToMany(() => Autor, autor => autor.id,{eager:true})
    @JoinTable()
    autores: Autor[]

    @Column()
    titulo:string

    @Column()
    lugarEspecifico: string;

    @Column()
    paginasDimensiones: string

    @Column()
    notaTesis: string

    @ManyToMany(() => Tema, tema => tema.id,{eager:true})
    @JoinTable()
    temas: Tema[]

    @OneToMany(() => EjemplarTesi, (ejemplarTesi) => ejemplarTesi.fichaTesi)
    ejemplarTesi: EjemplarTesi[]

}
