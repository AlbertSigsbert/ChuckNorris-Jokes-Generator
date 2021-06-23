document.querySelector('.btn').addEventListener('click', getJokes)

function getJokes(e){
   
    const number = document.querySelector('#joke-number').value;
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function(){
        let output = '';
        
        const response = JSON.parse(this.responseText);
        if(this.status === 200){
            response.value.forEach( joke => {
                output += ` <li class="list-group-item ">${joke.joke}</li>`;
            });
        }else{
            output += `<li class="list-group-item list-group-item-danger">Something went wrong</li>`;
        }

        document.querySelector('.jokes').innerHTML = output;
    }
    
    

    xhr.send();

    
    e.preventDefault();
}