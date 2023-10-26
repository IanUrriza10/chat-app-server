import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

export class BaseEntity {
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  public updated_at: Date;
  @DeleteDateColumn()
  public deleted_at: Date;
}
