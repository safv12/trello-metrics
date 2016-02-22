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
  }
};
