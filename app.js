//define ui variables
document.querySelector('#getNumber').addEventListener('click', getNumberFacts);
document.querySelector('#getRandom').addEventListener('click', getRandomNumberFacts);

const results = document.querySelector('#results');

function getNumberFacts(e) {
    const number = document.querySelector('#number').value;
    if (number != '') {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `http://numbersapi.com/${number}/trivia`, true);

        xhr.onload = function () {
            if (this.status === 200) {
                const response = this.responseText;
                console.log(response);
                results.innerHTML = `<p>${response}</p>`;
            }else{
                M.toast({html: 'Something went wrong'})
            }
        }

        xhr.send();
    }else{
        M.toast({html: 'Please enter a number'});
    }


    e.preventDefault();
}

function getRandomNumberFacts(e) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://numbersapi.com/random/trivia`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const response = this.responseText;
            console.log(response);
            results.innerHTML = `<p>${response}</p>`;
        }
    }

    xhr.send();

    e.preventDefault();
}