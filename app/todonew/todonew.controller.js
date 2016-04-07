(function() {
    'use strict';

    angular
        .module('app.todonew')
        .controller('ToDoNewController', ToDoNewController);

    ToDoNewController.$inject = ['dataservice'];

    /* @ngInject */
    function Controller(dataservice) {
        var vm = this;

        // defino todas las variables y funciones que deseo esten en la vista


        // ejecuto todo aquello a inicializar
        activate();


        //Funciones
        function activate() {

        }
    }
})();
