// All the ToDoList functions down here

export function addTask(object, array) {
    array.push(object);

    return array;
}

export function deleteTask(index, array) {
    array.splice(index, 1);

    return array;
}

export function modifyTask(index, newLabel, array) {
    array[index].label = newLabel;

    return array
}

export function deleteAllTasks(position, array) {
    array.splice(position, array.length);

    return array;
}

export function isDone(index, array) {
    array[index].done = true;

    return array;
}

export function isIncomplete(index, array) {
    array[index].done = false;

    return array;
}

export function markAllAsDone(array) {
    array.forEach(item => {
        item.done = true
    });

    return array;
}

export function markAllAsIncomplete(array) {
    array.forEach(item => {
        item.done = false
    });

    return array;
}
