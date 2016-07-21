'use strict';

module.exports = function(app){
  app.controller('CowController', function(CowService) {
    this.cowSay = function(str) {
      this.text = CowService.cow({text:str, f:'vader'});
    };
  });
};
