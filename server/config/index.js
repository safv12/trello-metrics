'use strict';

module.exports = {
  env: {
    base: 'http://localhost',
    port: 9001
  },
  db: {
    dbName: 'trello_metrics',
    username: 'trello',
    password: 'trello',
    options: {
      host: 'localhost',
      dialect: 'sqlite', //'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
      pool: { max: 10, min: 0, idle: 10000 },
      logging: false,
      storage: 'database.sqlite'
    }
  },
  trello: {
    key: 'fec287fe491a4c21d5605fb64d086872',
    token: 'd72bdbe62ef480e324f0fd7e451b151ec6b8e9196a9773d03698f175acac11f0'
  }
};
