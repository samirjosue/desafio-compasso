import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCliente1632768067707 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: "clientes",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true,
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "sexo",
                        type: "varchar"
                    },
                    {
                        name: "data_nascimento",
                        type: "date"
                    },
                    {
                        name: "idade",
                        type: "int"
                    },
                    {
                        name: "cidade_id",
                        type: "int"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKCidadeCliente",
                        referencedTableName: "cidades",
                        referencedColumnNames: ["id"],
                        columnNames: ["cidade_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("clientes")
    }

}
