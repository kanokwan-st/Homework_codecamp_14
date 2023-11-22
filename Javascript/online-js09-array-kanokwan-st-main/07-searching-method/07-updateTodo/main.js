const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
]; 

function updateTask(id ,newName) {
    const findIndex = tasks.findIndex( element => {
        return element.id == id;
    })
    tasks[findIndex].name = newName;
    return tasks;
}

updateTask(2, 'Travelling');