import { MigrationInterface, QueryRunner } from "typeorm";

export class addisActiveToContacts1679745674322 implements MigrationInterface {
    name = 'addisActiveToContacts1679745674322'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "isActive"`);
    }

}
