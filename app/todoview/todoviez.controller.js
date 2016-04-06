(function() {
    'use strict';

    angular
        .module('app.todoview')
        .controller('ToDoViewController', ToDoViewController);

    ToDoViewController.$inject = ['dataservice'];

    /* @ngInject */
    function ToDoViewController(dataservice) {
        var vm = this;

// defino todas las variables que deseo esten en la vista
        vm.getToDo = [];

// ejecuto todo aquello a inicializar
        activate();

// FUNCIONES
        function activate() {
            vm.getToDo = getDo();
        }

        function getDo() {
          console.log(dataservice.getToDo());
          return dataservice.getToDo();
        }
    }
})();
