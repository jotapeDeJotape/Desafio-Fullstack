import { MigrationInterface, QueryRunner } from "typeorm";

export class addIsActivet1679731844018 implements MigrationInterface {
    name = 'addIsActivet1679731844018'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "isActive" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "isActive"`);
    }

}
