const quoteEl = document.getElementById('text')
const authorEl = document.getElementById('author')

window.onload = init;
function init() {
    newQuote();
};

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c78b23ab3emsh9417fe91a36eebap10fb38jsn072f5de820f4',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
	}
};

function newQuote() {
    fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=2', options)
	.then(response => response.json())
	.then(response => {
        quoteEl.innerText = response[0].text
        authorEl.innerText = response[0].author;
    })
	.catch(err => console.error(err));
};