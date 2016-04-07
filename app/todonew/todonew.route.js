(function() {
  angular
    .module('app.todonew')
    .config(config);

    function config($stateProvider) {

      $stateProvider
      .state('new', {
        url: "/new",
        templateUrl: "app/todonew/todonew.view.html",
        controller: 'ToDoNewController',
        controllerAs: 'vm'
      });
    }
}());
