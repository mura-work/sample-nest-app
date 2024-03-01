import {
  BaseEntity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('companies')
export class CompanyModel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  companyName: string;

  @Column({ type: 'varchar' })
  prtimesUrl: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  chargeEmployee: string;

  @Column({ type: 'varchar' })
  category: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
