"use strict";

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
    vm.addTask = (newTask) => {
        vm.list.push(newTask);
        document.querySelector(".input__new_task").value = "";
    };
    vm.removeItem = (index) => {
        vm.list.splice(index, 1);
    };
    vm.completeTask = (index) => {
        vm.list[index].completed = true;
    };
}

angular
    .module("TodoApp")
    .controller("TodoController", TodoController);

