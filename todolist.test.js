// All the ToDoList tests down here

import {expect, test} from "vitest";
import { addTask,
         deleteTask,
         modifyTask,
         deleteAllTasks,
         isDone,
         isIncomplete,
         markAllAsDone,
         markAllAsIncomplete,
         moveTask
         } from "./todolist";


// PREMIER TEST : addTask
test("add a task", () => {
    let array = [];

    let object = {
        label: "Task 1",
        done: false
    };

    let result = addTask(object, array);

   expect(result).toHaveLength(1);
   expect(result[0]).toEqual(object);
});

// DEUXIEME TEST : deleteTask
test("delete a task", () => {
   let array = [
       { label: "Task 1", done: false },
       { label: "Task 2", done: false }
   ];

   let indexToDelete = 0;
   const result = deleteTask(indexToDelete, array)

   expect(result).toEqual({ label: "Task 1", done: false });
   expect(array).toEqual({ label: "Task 2", done: false });
});

// TROISIEME TEST : modifyTask
test("modify a task", () => {
    let array = [
        { label: "Task 1", done: false },
        {label: "Task 2", done: false }
    ];

    let indexToModify = 1;
    let newTask = "Faire le ménage";
    const result = modifyTask(indexToModify, newTask, array);

    expect(result).toEqual( { label: newTask, done: false });
    expect(array[1].label).toEqual(newTask);
});