let allTasks = [];



function render(){


   

    for (let i = 0; i < allTasks.length; i++) {
        let list = document.getElementById('list');

        container.innerHTML +=`<div class="container"></div>`
        list.innerHTML +=
    
        `
        <div class="container">
        <div>${allTasks[i].assigned}</div>
        <div>${allTasks[i].category} </div>
        <div>${allTasks[i].description}</div
        <div>${allTasks[i].urgency}</div>
        </div>
        `
  
        
    }
   
}

let currentDraggendElement;

// oberer Container für Todos mit category == 'open'
function updateHTML(){
    let todoskanban = todos.filter(t => t['list'] == 'todos');

    document.getElementById('todo').innerHTML = '';

    for (let i = 0; i < todoskanban.length; i++) {
        const element = todoskanban[i];
        document.getElementById('todo').innerHTML += generateTodoHTML(element);
        
    }

    // unterer Container für Todos mit category == 'closed'
    let inprogress = todos.filter(t => t['list'] == 'inprogress');

    document.getElementById('inprogress').innerHTML = '';

    for (let i = 0; i < inprogress.length; i++) {
        const element = inprogress[i];
        document.getElementById('inprogress').innerHTML += generateTodoHTML(element);
    
        }

        let testing = todos.filter(t => t['list'] == 'testing');

        document.getElementById('testing').innerHTML = '';
    
        for (let i = 0; i < testing.length; i++) {
            const element = testing[i];
            document.getElementById('testing').innerHTML += generateTodoHTML(element);
        
            }

            let done = todos.filter(t => t['list'] == 'done');

            document.getElementById('done').innerHTML = '';
        
            for (let i = 0; i < done.length; i++) {
                const element = done[i];
                document.getElementById('done').innerHTML += generateTodoHTML(element);
            
                }
}

    
    function startDragging(id){
        currentDraggendElement = id;



    }



    function generateTodoHTML(element){
        return `<div draggable="true" ondragstart="startDragging(${element['id']})" class="todo">${element['titel']}</div>`;
    }

    function allowDrop(ev){
        ev.preventDefault();

    }

    function moveTo(category){
        todos[currentDraggendElement]['list'] = category;  //z.B. Todo mit id 1: Feld 'category' ändert sich zu 'open' oder 'closed'
        updateHTML();
    }