module.exports = {
    "type": "postgres",
    "host": "172.21.208.1",
    "port": 5432,
    "username": "dev",
    "password": "test@123",
    "database": "appdog",
    "entities": [ __dirname + "/src/models/*.ts"],
    "migrations": [ __dirname + "/src/database/migrations/*.ts"],
    "cli": {
        "entitiesDir": "src/models/*.ts",
        "migrationsDir": "src/database/migrations",
        "subscribersDir": "src/subscribers"
     }
 }