
let users = [];
let allTasks = [];

function addTask(){
    let titel = document.getElementById('titel').value;
    let category = document.getElementById('category').value;
    let description = document.getElementById('description').value;
    let date = document.getElementById('date').value;
    let urgency = document.getElementById('urgency').value;
    let assigned = 'Laura Andrasev';
    let task = {
        'titel':  titel,
        'category': category,
        'description': description,
        'date': date,
        'urgency': urgency,
        'assigned': assigned,
        

    };

   

    allTasks.push(task);
    
    let allTasksAsString = JSON.stringify(allTasks);
   await backend.setItem('allTasks', allTasksAsString);


}

function loadTasks(){
    let allTasksAsString = JSON.parse(allTasksAsString);
    
    allTasks.push
    console.log('Loaded allTasks', allTasks);
}

function render(){

    let list = document.getElementById('list');

    for (let i = 0; i < allTasks.length; i++) {
        let allTasks = allTasks[i];
        list.innerHTML +=
        `<div>${task.title},
        ${task.category}</div>,
        ${task.description}</div>,
        ${task.date}</div>,
        ${task.urgency}</div>,
        ${task.assigned}</div>,
        

        `
        
    }
}