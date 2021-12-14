
let users = [];




function render(){

    let list = document.getElementById('list');

    for (let i = 0; i < allTasks.length; i++) {
       
        list.innerHTML +=
    
        `<div>
        ${allTasks[i].titel},
        ${allTasks[i].category},
        ${allTasks[i].description},
        ${allTasks[i].date},
        ${allTasks[i].urgency},
        ${allTasks[i].assigned}
        </div>`
  
        
    }
}