import { MigrationInterface, QueryRunner } from "typeorm";

export class deletePasswordFromContacts1679740462779 implements MigrationInterface {
    name = 'deletePasswordFromContacts1679740462779'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "password" character varying(150) NOT NULL`);
    }

}
