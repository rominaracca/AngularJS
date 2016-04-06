(function() {
  'use strict';

  angular
    .module('app.core')
    .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise("/");
      // $stateProvider
      // .state('404', {
      //   url: "/404",
      //   templateUrl: "app/core/404.html"
      // });
    }

}());
