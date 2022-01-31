
let users = [];
let container = [];




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

//function save(){
    //let listAsText = JSON.stringify(list);
    //backend.setItem('list', listAsText);





//function load(){
    //let listAsText = backend.setItem('list');
    
    //if (listAsText) {
       // list = JSON.parse(listAsText);
        
    


