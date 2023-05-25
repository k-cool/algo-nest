import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/* @Entity({
    name: 'TEST',
    engine: 'MyISAM',
    database: 'example_dev',
    schema: 'schema_with_best_tables',
    synchronize: false,
    orderBy: {
      name: 'ASC',
      id: 'DESC'
    }
  }) */
@Entity()
export class Test extends BaseEntity {
    //auto increment
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string; 
}