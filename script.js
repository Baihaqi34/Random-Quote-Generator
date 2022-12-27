var quote = document.getElementById("text-quote");
var	  author = document.getElementById("author");
var kategori = document.getElementById("kategori");

function randomQuote() {


	  fetch('https://api.quotable.io/random')
	  		.then(response => response.json())
	  		.then(data => {
	  			kategori.innerText = data.tags;
	  			quote.innerText = `"${data.content}"`;
	  			author.innerText = `--${data.author}`;

	  		})

}	


randomQuote();


function newQuote() {
	randomQuote();
}