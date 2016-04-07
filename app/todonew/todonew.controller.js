(function() {
    'use strict';

    angular
        .module('app.todonew')
        .controller('ToDoNewController', ToDoNewController);

    ToDoNewController.$inject = ['dataservice', '$state'];

    /* @ngInject */
    function ToDoNewController(dataservice, $state) {
        var vm = this;

        // defino todas las variables y funciones que deseo esten en la vista
        vm.newToDo = {};
        vm.saveToDo = save;
        vm.cancelToDo = cancel;

        // ejecuto todo aquello a inicializar
        activate();


        //Funciones
        function activate() {
            vm.newToDo.done = false;
        }

        function save(todo) {
          dataservice.addToDo(todo);
          $state.go('view');
        }

        function cancel() {
          vm.newToDo = {};
          $state.go('view');
        }
    }
})();
