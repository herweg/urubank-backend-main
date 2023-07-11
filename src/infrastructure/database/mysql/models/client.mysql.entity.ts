import { Entity, Column } from 'typeorm';
import { ClientDomainEntityBase } from '../../../../domain/entities';

@Entity('client')
export class ClientMysqlEntity extends ClientDomainEntityBase {
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
