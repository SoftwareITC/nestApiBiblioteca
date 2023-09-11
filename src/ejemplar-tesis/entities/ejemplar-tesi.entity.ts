import { Accesibilidad } from "src/accesibilidad/entities/accesibilidad.entity";
import { Analista } from "src/analista/entities/analista.entity";
import { Estante } from "src/estante/entities/estante.entity";
import { FichaTesi } from "src/ficha-tesis/entities/ficha-tesi.entity";
import { PrimaryGeneratedColumn, ManyToOne, Column, Entity } from "typeorm";

@Entity()
export class EjemplarTesi {

    @PrimaryGeneratedColumn()
    id: number;

    //FK ficha Tesis
    @ManyToOne(() => FichaTesi, (fichaTesi) => fichaTesi.id,{eager:true})
     fichaTesi: FichaTesi

    @Column()
    numeroEjemplar: number;

    @Column()
    numeroVolumen: number;

    @Column()
    numeroTomo: number;

    //FK accesibilidad
    @ManyToOne(() => Accesibilidad, (accesibilidad) => accesibilidad.id,{eager:true})
     accesibilidad: Accesibilidad

    //FK estante
    @ManyToOne(() => Estante, (estante) => estante.id,{eager:true})
    estante: Estante

    //FK analista
    @ManyToOne(() => Analista, (analista) => analista.id,{eager:true})
     analista: Analista
  

    @Column()
    fechaRegistro: Date;

    @Column()
    fechaUltimaModificacion: Date;


}
