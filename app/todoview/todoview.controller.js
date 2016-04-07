(function() {
    'use strict';

    angular
        .module('app.todoview')
        .controller('ToDoViewController', ToDoViewController);

    ToDoViewController.$inject = ['dataservice', '$state'];

    /* @ngInject */
    function ToDoViewController(dataservice, $state) {
        var vm = this;

        // defino todas las variables y funciones que deseo esten en la vista
        vm.getToDo = [];
        vm.editToDo = edit;
        vm.newToDo = add;

        // ejecuto todo aquello a inicializar
        activate();

        // Funciones
        function activate() {
            vm.getToDo = getDo();
        }

        function getDo() {
          return dataservice.getToDo();
        }

        function edit(identif) {
          $state.go('edit', {id: identif} );
        }

        function add() {
          $state.go('new');
        }
    }
})();
