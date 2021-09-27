var translateBtn = document.querySelector('#translateBtn');
var output = document.querySelector('#output');



const errorHandler = (error) => {

    window.alert(error);
    console.log(error);
}


const handleClick = () => {
    var inputText = document.querySelector('#input-text').value;
    var apiUrl = `https://api.funtranslations.com/translate/minion.json?text=${inputText}`;

    console.log(apiUrl)
    fetch(apiUrl)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            output.innerText = json.contents.translated;
            })
        .catch((err) => errorHandler('something went wrong. Please try again'))
}

translateBtn.addEventListener('click', handleClick)