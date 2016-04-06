(function() {
  angular
    .module('app.todoview')
    .config(config);

    function config($stateProvider) {

      $stateProvider
      .state('view', {
        url: "/",
        templateUrl: "app/todoView/todoview.view.html",
        controller: 'ToDoViewController',
        controllerAs: 'vm'
      });
    }
}());
