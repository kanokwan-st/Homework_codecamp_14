const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

function deleteTask(id) {
    const findIndex = tasks.findIndex(element => {
        return element.id == id;
    })
    tasks.splice(findIndex,1);
    return tasks;
}

deleteTask(1)

