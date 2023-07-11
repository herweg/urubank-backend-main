import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ClientDomainEntityBase } from '../../../../domain/entities';
import { ObjectId } from 'mongodb';

@Entity('client')
export class ClientMongoEntity extends ClientDomainEntityBase {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  id: string;

  @Column()
  typeClient: number;

  @Column()
  fullName: string;

  @Column()
  status: number;

  @Column()
  phone: string;

  @Column()
  departament: string;

  @Column()
  document: string;

  @Column()
  createdAt: number;

  @Column()
  completedAt: number;
}
