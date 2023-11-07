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
         } from ".todolist";

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

