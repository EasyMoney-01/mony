require('dotenv').config();
module.exports = {
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/migrations'
    },
    pool: { min: 2, max: 10 }
  }
};
