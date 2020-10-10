import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1602358023036 implements MigrationInterface {
    name = 'CreateTables1602358023036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "animals_specie_enum" AS ENUM('Dog', 'Cat')`);
        await queryRunner.query(`CREATE TABLE "animals" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "size" character varying NOT NULL, "sex" character varying NOT NULL, "isCastrated" boolean NOT NULL, "approximateAge" integer NOT NULL, "specie" "animals_specie_enum" NOT NULL, CONSTRAINT "PK_6154c334bbb19186788468bce5c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "responsibilityStatements" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "text" character varying NOT NULL, CONSTRAINT "PK_71d6f430204b2441805bb64b11d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adoptions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "adoptionDate" TIMESTAMP NOT NULL, "donatedBy" character varying NOT NULL, "observations" character varying NOT NULL, "adoptionFee" integer NOT NULL, "adopterId" uuid, "animalId" uuid, "resposabilityStatementId" uuid, CONSTRAINT "REL_9111108e9c15eb001f71cda50e" UNIQUE ("animalId"), CONSTRAINT "REL_eea2d4d90da26763e31010e184" UNIQUE ("resposabilityStatementId"), CONSTRAINT "PK_f3897fdb8f8f34600711b59183b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "emails" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "address" character varying NOT NULL, "receiveNewsletter" boolean NOT NULL, "adopterId" uuid, CONSTRAINT "PK_a54dcebef8d05dca7e839749571" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "phones_type_enum" AS ENUM('LANDLINE_PHONE', 'MOBILE_PHONE')`);
        await queryRunner.query(`CREATE TABLE "phones" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "type" "phones_type_enum" NOT NULL, "value" character varying NOT NULL, "hasWhatsApp" boolean NOT NULL, "adopterId" uuid, CONSTRAINT "PK_30d7fc09a458d7a4d9471bda554" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adopters" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "cpf" character varying NOT NULL, "rg" character varying NOT NULL, CONSTRAINT "PK_a61836ed298b9de340bdd0e294a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "adresses_type_enum" AS ENUM('RESIDENTIAL', 'COMMERCIAL')`);
        await queryRunner.query(`CREATE TABLE "adresses" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "type" "adresses_type_enum" NOT NULL, "street" character varying NOT NULL, "number" character varying NOT NULL, "neighborhood" character varying NOT NULL, "complement" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "adopterId" uuid, CONSTRAINT "PK_2787c84f7433e390ff8961d552d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "adoptions" ADD CONSTRAINT "FK_de3dc42725139e35b16d08636eb" FOREIGN KEY ("adopterId") REFERENCES "adopters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "adoptions" ADD CONSTRAINT "FK_9111108e9c15eb001f71cda50e2" FOREIGN KEY ("animalId") REFERENCES "animals"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "adoptions" ADD CONSTRAINT "FK_eea2d4d90da26763e31010e184b" FOREIGN KEY ("resposabilityStatementId") REFERENCES "responsibilityStatements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "emails" ADD CONSTRAINT "FK_a278ef05369ca948b3736e94be6" FOREIGN KEY ("adopterId") REFERENCES "adopters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "phones" ADD CONSTRAINT "FK_5a5aa588706c4e74f41bc2ff4b7" FOREIGN KEY ("adopterId") REFERENCES "adopters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_085c43417477c2f4c7828e6f804" FOREIGN KEY ("adopterId") REFERENCES "adopters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_085c43417477c2f4c7828e6f804"`);
        await queryRunner.query(`ALTER TABLE "phones" DROP CONSTRAINT "FK_5a5aa588706c4e74f41bc2ff4b7"`);
        await queryRunner.query(`ALTER TABLE "emails" DROP CONSTRAINT "FK_a278ef05369ca948b3736e94be6"`);
        await queryRunner.query(`ALTER TABLE "adoptions" DROP CONSTRAINT "FK_eea2d4d90da26763e31010e184b"`);
        await queryRunner.query(`ALTER TABLE "adoptions" DROP CONSTRAINT "FK_9111108e9c15eb001f71cda50e2"`);
        await queryRunner.query(`ALTER TABLE "adoptions" DROP CONSTRAINT "FK_de3dc42725139e35b16d08636eb"`);
        await queryRunner.query(`DROP TABLE "adresses"`);
        await queryRunner.query(`DROP TYPE "adresses_type_enum"`);
        await queryRunner.query(`DROP TABLE "adopters"`);
        await queryRunner.query(`DROP TABLE "phones"`);
        await queryRunner.query(`DROP TYPE "phones_type_enum"`);
        await queryRunner.query(`DROP TABLE "emails"`);
        await queryRunner.query(`DROP TABLE "adoptions"`);
        await queryRunner.query(`DROP TABLE "responsibilityStatements"`);
        await queryRunner.query(`DROP TABLE "animals"`);
        await queryRunner.query(`DROP TYPE "animals_specie_enum"`);
    }

}
