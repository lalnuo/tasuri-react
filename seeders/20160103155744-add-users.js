'use strict';

module.exports = {
  up: function (queryInterface, Sequelize, done) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Lalli',
        createdAt: "2015-11-01T12:31:56.451Z",
        updatedAt: "2015-11-01T12:31:56.451Z"
      },
      {
        name: 'Katja',
        createdAt: "2015-11-01T12:31:56.451Z",
        updatedAt: "2015-11-01T12:31:56.451Z"
      }
  ], {})
  }
};
