(function() {
  'use strict';

  angular
  .module('app.core')
  .factory('dataservice', dataservice);

  // factory.$inject = ['dependencies'];

  /* @ngInject */
  function dataservice() {
    var todos = [
      {
        "id": 0,
        "title": "Aprender Gulp",
        "description": "Estudiar y aprender el uso de GULP",
        "done": true
      },
      {
        "id": 1,
        "title": "Crear estrutura de proyecto",
        "description": "Crear un proyecto usando la estructura y recomendaciones de John Papa",
        "done": true
      },
      {
        "id": 2,
        "title": "Definir modulos",
        "description": "Definir las carpetas dentro del proyecto que representaran los modulos",
        "done": true
      },
      {
        "id": 3,
        "title": "Definir controllers",
        "description": "Definir los controladores para cada uno de los modulos",
        "done": true
      },
      {
        "id": 4,
        "title": "Definir vistas",
        "description": "Definir las vistas para cada uno de los modulos",
        "done": true
      },
      {
        "id": 5,
        "title": "ui-router",
        "description": "Incorporar UI-ROUTER al proyecto",
        "done": true
      },
      {
        "id": 6,
        "title": "Angular",
        "description": "Incorporar Angular al proyecto",
        "done": false
      },
      {
        "id": 7,
        "title": "Agregar estilos",
        "description": "Incorporar estilos al proyecto en caso de necesitarlo",
        "done": false
      },
      {
        "id": 7,
        "title": "Presentar proyecto",
        "description": "Enviar mail con la presentacion del proyecto",
        "done": false
      }
    ];


    //agregar aca variables y funciones a exponer
    var service = {
      getToDo: selectToDo,
      removeToDo: deleteToDo,
      editToDo: updqteToDo,
      addToDo: insertToDo
    };

    return service;

    // lista de tareas
    function selectToDo() {
      return todos;
    }

    // eliminar una tarea
    function deleteToDo(id) {
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
          todos.splice(i, 1);
          break;
        }
      }
    }

    // modificar una tarea
    function updateToDo(todo) {
      for (var i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
          todos.splice(i, 1, todo);
          break;
        }
      }
    }

    // agregar una tarea
    function insertToDo(todo) {
          todos.push(todo);
        }

  }
})();
