(function() {
    'use strict';

    angular
        .module('app.todoedit')
        .controller('ToDoEditController', ToDoEditController);

    ToDoEditController.$inject = ['dataservice', '$stateParams', '$state'];

    /* @ngInject */
    function ToDoEditController(dataservice, $stateParams, $state) {
        var vm = this;

        // defino todas las variables y funciones que deseo esten en la vista
        vm.getToDoById = null;
        vm.saveToDo = save;

        // ejecuto todo aquello a inicializar
        activate();

        //Funciones
        function activate() {
          vm.getToDoById = dataservice.getToDoById($stateParams.id);
          if(vm.getToDoById === null){
            $state.go('view');
          }
        }

        function save(todo) {
          dataservice.editToDo(todo);
          $state.go('view');
        }

    }
})();
