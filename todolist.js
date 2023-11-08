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