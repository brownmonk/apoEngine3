var root = require('path').normalize(__dirname + '/../..');
module.exports = {
  // Development Config
  development: {
    root: root,
    ssl: {
      enabled: true,
      key: './server.key',
      cert: './server.crt'
    },
    client: {
      port: 8080
    },
    db: {
      host: 'ds027789.mongolab.com',
      port: 27789,
      dbname: "gamedb",
      username: "gamedbuser",
      password: "gamedbpass",
      timeout: 15000
    },
    db_backup: {
      host: 'localhost',
      port: 27789,
      dbname: "gamedb",
      username: "gamedbuser",
      password: "gamedbpass",
      timeout: 1000
    },
    paths: {
      client: root + '/client',
      views: root + '/client',
      stack: root + '/server',
      utils: root + '/server/utils',
      models: root + '/server/models',
      config: root + '/server/config'
    }
  },

  // Test Config
  test: {
    root: root,
    client: {

      port: 3007
    },
    db: {
      host: 'ds027789.mongolab.com',
      port: 27789,
      dbname: "gamedb",
      username: "gamedbuser",
      password: "gamedbpass",
      timeout: 1000
    },
    db_backup: {
      host: 'localhost',
      port: 27789,
      dbname: "gamedb",
      username: "gamedbuser",
      password: "gamedbpass",
      timeout: 1000
    },
    paths: {
      client: root + '/client',
      views: root + '/client/views',
      stack: root + '/server',
      utils: root + '/server/utils',
      models: root + '/server/models',
      config: root + '/server/config'
    }
  },

  production: {

    client: root + '/client'
  }

};
