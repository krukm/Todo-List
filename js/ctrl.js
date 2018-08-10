"use strict";

angular
    .module("TodoApp")
    .controller("TodoController", TodoController);

function TodoController () {

    const vm = this;
    vm.list = [
        {
            task: "Get milk",
            completed: false
        },
        {
            task: "Wash the cat",
            completed: true
        },
        {
            task: "Take out the trash",
            completed: false
        },
        {
            task: "Buy a bus pass",
            completed: false
        }
    ];
}

