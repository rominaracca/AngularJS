(function() {
  angular
    .module('app.todoedit')
    .config(config);

    function config($stateProvider) {

      $stateProvider
      .state('edit', {
        url: "/edit",
        templateUrl: "app/todoedit/todoedit.view.html",
        params: {
          id: null
        },
        controller: 'ToDoEditController',
        controllerAs: 'vm'
      });
    }
}());
