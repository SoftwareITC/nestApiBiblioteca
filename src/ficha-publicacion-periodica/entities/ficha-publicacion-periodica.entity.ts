import { Carrera } from "src/carrera/entities/carrera.entity";
import { Editorial } from "src/editorial/entities/editorial.entity";
import { EjemplarPublicacionPeriodica } from "src/ejemplar-publicacion-periodica/entities/ejemplar-publicacion-periodica.entity";
import { Lenguaje } from "src/lenguaje/entities/lenguaje.entity";
import { Lugar } from "src/lugar/entities/lugar.entity";
import { Proveedor } from "src/proveedor/entities/proveedor.entity";
import { Tema } from "src/temas/entities/tema.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FichaPublicacionPeriodica {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Lugar, (lugar) => lugar.id,{eager:true})
    lugar: Lugar

    @ManyToOne(() => Lenguaje, (lenguaje) => lenguaje.id,{eager:true})
    lenguaje: Lenguaje

    @Column()
    tipoPublicacion:string;

    @ManyToOne(() => Carrera, (carrera) => carrera.id,{eager:true})
    carrera: Carrera

    //FK Proveedor
    @ManyToOne(() => Proveedor, (proveedor) => proveedor.id,{eager:true})
    proveedor: Proveedor


    @ManyToOne(() => Editorial, (editorial) => editorial.id,{eager:true})
    editorial: Editorial

    @Column()
    periodicidad: string;

    @Column()
    tipoAdquisicion: string;

    @Column()
    suscripcion: string;

    @Column()
    fechaSuscripcion: Date;

    @Column({default:true})
    activo: boolean;

    @Column()
    titulo: string;

    @Column()
    pieImprenta: string;

    @Column()
    descripcionFisica: string;

    @ManyToMany(() => Tema, tema => tema.id,{eager:true})
    @JoinTable()
    temas: Tema[]

    @Column()
    acervo: string;

    @OneToMany(() => EjemplarPublicacionPeriodica, (ejemplarPublicacionPeriodica) => ejemplarPublicacionPeriodica.fichaPublicacionPeriodica)
    ejemplarPublicacionPeriodica: EjemplarPublicacionPeriodica[]

}
