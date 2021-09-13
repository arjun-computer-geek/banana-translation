var inputText = document.querySelector('#input-text').value;
var translateBtn = document.querySelector('#translateBtn');
var output = document.querySelector('#output');

var apiUrl = `https://api.funtranslations.com/translate/minion.json?text=${inputText}`;

const errorHandler = (error) => {

    alert(`You reached Maximum attempts. Please try after an hours.`)
    console.log(error)
}


const handleClick = () => {
    

    fetch(apiUrl)
        .then(response => response.json())
        .then(json => {
            output.innerText = json.contents.translated;
            })
        .catch(errorHandler)
}

translateBtn.addEventListener('click', handleClick)