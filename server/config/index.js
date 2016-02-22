'use strict';

module.exports = {
  env: {
    base: 'http://localhost',
    port: 9001
  },
  db: {
    dbName: 'example-db',
    username: 'nodeapi',
    password: 'A3TVSGx4Q424DyWf',
    options: {
      host: 'localhost',
      dialect: 'mysql', //'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
      pool: { max: 10, min: 0, idle: 10000 },
      logging: false
    }
  }
};
