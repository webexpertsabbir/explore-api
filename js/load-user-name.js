function loadUserName(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => userName(data))
}

function userName(data){
    const ul = document.getElementById('user-list');
    for(const user of data){
        console.log(user.name)
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}