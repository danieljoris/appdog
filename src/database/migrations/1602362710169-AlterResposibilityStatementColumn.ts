import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterResposibilityStatementColumn1602362710169 implements MigrationInterface {
    name = 'AlterResposibilityStatementColumn1602362710169'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "responsibilityStatements" RENAME COLUMN "text" TO "statement"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "responsibilityStatements" RENAME COLUMN "statement" TO "text"`);
    }

}
