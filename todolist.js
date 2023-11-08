// All the ToDoList functions down here

export function addTask(object, array) {
    array.push(object);

    return array;
}

export function deleteTask(index, array) {
    array.splice(index, 1);

    return array;
}
