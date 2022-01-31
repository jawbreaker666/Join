let todos = [{

    'id': 0,
    'titel':  'Programmieren',
    'list': 'todos',
    'category': 'open',
    'description': 'Seite bis 16 Uhr fertig programmieren',
    'date': '2021-16-12',
    'urgency': 'High',
    'assigned': 'Laura Andrasev',
    

},{
    'id': 1,
    'titel':  'Designen',
    'list': 'todos',
    'category': 'open',
    'description': 'Mockup bis 14 Uhr fertig designen',
    'date': '2021-16-12',
    'urgency': 'Middle',
    'assigned': 'Laura Andrasev',
    

},{
    'id': 2,
    'titel':  'Besprechung',
    'list': 'todos',
    'category': 'closed',
    'description': '8 Uhr Besprechung',
    'date': '2021-16-12',
    'urgency': 'High',
    'assigned': 'Laura Andrasev',

}];

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