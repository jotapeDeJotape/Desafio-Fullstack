import { MigrationInterface, QueryRunner } from "typeorm";

export class addIsActivet1679732204091 implements MigrationInterface {
    name = 'addIsActivet1679732204091'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "isActive" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "isActive" SET DEFAULT false`);
    }

}
