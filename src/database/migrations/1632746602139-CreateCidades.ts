import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCidades1632746602139 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "cidades",
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
                  type: "varchar",
                },
                {
                  name: "estado",
                  type: "varchar",
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("cidades");
    }

}
