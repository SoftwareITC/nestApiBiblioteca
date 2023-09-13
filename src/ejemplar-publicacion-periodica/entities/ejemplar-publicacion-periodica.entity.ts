import { Accesibilidad } from "src/accesibilidad/entities/accesibilidad.entity";
import { Analista } from "src/analista/entities/analista.entity";
import { Estante } from "src/estante/entities/estante.entity";
import { FichaPublicacionPeriodica } from "src/ficha-publicacion-periodica/entities/ficha-publicacion-periodica.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EjemplarPublicacionPeriodica {

    @PrimaryGeneratedColumn()
    id: number;

    //FK ficha Publicacion Periodica
    @ManyToOne(() => FichaPublicacionPeriodica, (fichaPublicacionPeriodica) => fichaPublicacionPeriodica.id,{eager:true})
    fichaPublicacionPeriodica: FichaPublicacionPeriodica

    @Column()
    tituloEdicion: string;

    @Column()
    numeroEjemplar: number;

    @Column()
    fechaPublicacion: Date;

    @Column()
    numeroVolumen: number;

    @Column()
    numero: number;

    @Column()
    numeroCopia: number;

    @Column()
    notaCopia: string;

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
