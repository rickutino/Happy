/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;

  // No primeiro parametro retorna o tipo "Images", segundo parametro e o retorno inverso atual image.orphanages => Orphanage
  // No terceiro parametro no cascade ele ira fazer alteração caso tenha uma alteração ou deletar num Action DELETE.
  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update'],
  })
  // Qual e a coluna que se conectara com a tabela Image
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[];
}
