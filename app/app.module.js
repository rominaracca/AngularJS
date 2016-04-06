(function() {
    'use strict';

    angular.module('app', [
        /*
         * El orden no es importante.
         * Angular realiza un pase para registrar todos los módulos listados.
         */
         'app.todoview',
         'app.todoedit',
         'app.todonew',
         'app.core'
    ]);

})();
