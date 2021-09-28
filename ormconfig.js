const dotevnt = require("dotenv");

dotevnt.config({
  path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.prod",
});

module.exports = {
  type: "postgres",
  host: "localhost",
  port: 65432,
  username: "docker",
  password: "compasso",
  database: "desafio_compasso",
  migrations: [process.env.TYPEORM_MIGRATION],
  entities: [process.env.TYPEORM_ENTITIES],
  cli: {
    migrationsDir: process.env.TYPEORM_MIGRATION_DIR,
  },
};