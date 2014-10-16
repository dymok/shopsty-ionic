"use strict";
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('shopsty', ['ionic'])

.factory('Packs', function() {
  var storageKeys = {
    packs: 'packs',
    lastActivePack: 'lastActivePack'
  };
  return {
    all: function() {
      var packString = window.localStorage[storageKeys.packs];
      if (packString) {
        return angular.fromJson(packString);
      }
      return [];
    },
    save: function(packs) {
      window.localStorage[storageKeys.packs] = angular.toJson(packs);
    },
    newPack: function(packTitle) {
      return {
        title: packTitle,
        date: new Date(),
        items: []
      }
    },
    getLastActiveIndex: function() {
      return parseInt(window.localStorage[storageKeys.lastActivePack]) || 0;
    },
    setLastActiveIndex: function(index) {
      window.localStorage[storageKeys.lastActivePack] = index;
    }
  }
})

.controller('AppController', function($scope, Packs, $ionicSideMenuDelegate) {
  $scope.toggleMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
