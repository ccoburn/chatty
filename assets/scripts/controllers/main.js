'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data.messages;
    });

    $scope.addMessage = function ( user, message ) {
      if (user, message) {
        let theMessage = user + " -- " + message;
        messageService.addMessage(theMessage).then(function ( response ) {
          $scope.messages = response.data.messages;
        });
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
