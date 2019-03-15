import dotenv from 'dotenv';

dotenv.config();

const dialect = 'postgres';

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DEV_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.TEST_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect,
  },
  production: {
    use_env_variable: process.env.PROD_DATABASE,
  },
};
