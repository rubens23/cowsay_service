'use strict';

const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.factory('CowService', function() {
    const service = {};
    service.cows = function() {
      return cowsay.say;
    };
    service.cow = cowsay.say;
    return service;
  });
};
