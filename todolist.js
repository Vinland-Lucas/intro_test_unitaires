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