let input = document.getElementById('itemInput');
let addButton = document.querySelector('.add-item');
let clearButton = document.getElementById('clear-items');


function newItem() {
    let item = document.getElementById('itemInput').value;
    let ul = document.querySelector('.list');
    let li = document.createElement('li');

    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);

    input.value = '';
    li.onclick = completeItem;

    localStorage.setItem('todoList', ul.innerHTML);
    

}

input.addEventListener('keyup', function(keyPressed){

    if(keyPressed.which == 13) {
        newItem();
    }
    else {
    addButton.addEventListener('click', newItem);
    }
});

function completeItem(e) {
    e.target.style.textDecoration = 'line-through';
}



function addStorage() {
    if(localStorage == null) { 
         localStorage.setItem('todoList', ul.innerHTML);
         document.querySelector('h1').style.display = 'none';
    }
    
    let storedItems = localStorage.getItem('todoList');
    document.querySelector('ul').innerHTML = storedItems;
}

clearButton.onclick = function(){
    document.querySelector('ul').innerHTML = '';
    localStorage.clear();
}


// Add items to list after reload
window.addEventListener('load', addStorage);
