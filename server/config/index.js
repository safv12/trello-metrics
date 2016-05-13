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
    token: 'a253c864766668f1e8620f1f1c0f3138f5bd7f12f46515c052a46f32ac1e1b43'
  }
};
