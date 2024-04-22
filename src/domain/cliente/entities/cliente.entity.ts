import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    status: boolean;

    @CreateDateColumn()
    created_at: Date;
}
