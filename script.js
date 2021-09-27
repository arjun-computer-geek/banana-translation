var inputText = document.querySelector('#input-text').value;
var translateBtn = document.querySelector('#translateBtn');
var output = document.querySelector('#output');

var apiUrl = `https://api.funtranslations.com/translate/minion.json?text=${inputText}`;

const errorHandler = (error) => {

    window.alert(error.message);
    console.log(error.message);
}


const handleClick = () => {

    fetch(apiUrl)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            output.innerText = json.contents.translated;
            })
        .catch(errorHandler)
}

translateBtn.addEventListener('click', handleClick)