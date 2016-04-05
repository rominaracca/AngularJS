(function() {
    'use strict';

    angular.module('app', [
        /*
         * Order is not important. Angular makes a
         * pass to register all of the modules listed
         */
         'app.todoview',
         'app.todoedit',
         'app.todonew'
    ]);

})();
