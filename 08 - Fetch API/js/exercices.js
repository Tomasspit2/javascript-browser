/* EXERCISE 1 */

function fetchGetRequest()  {
    fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((json) => console.log(json));
}

fetchGetRequest();

/* EXERCISE 2 and EXERCISE 5 and EXERCISE 6 */

var myHeaders = new Headers();
myHeaders.append("apikey", "n4P9E2rrKnZ8jMILPmc1lfgH1nfCZbt4");

const controller = new AbortController();
  const signal = controller.signal;

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
    signal: signal
  };

function fetchJsonResponse() {
    fetch("https://api.apilayer.com/currency_data/convert?to=GBP&from=USD&amount=20", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Fetch request was aborted.');
        } else {
          console.error('Error during request:', error);
        }
      });
}

fetchJsonResponse()
/* TO LAUNCH THE CANCEL ON EXERCISE 6 UNCOMMENT THE CODE BELOW */

// controller.abort();

/* EXERCISE 3 */

function fetchPostRequest() {
    fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
    title: "Hello World",
    body: "My POST request",
    userId: 900,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
.then((response) => response.json())
.then((json) => console.log(json));
}

fetchPostRequest()

/* EXERCISE 4 */

function handleFetchErrors()    {
    fetch("https://v2.jokeapi.dev/joke/Programming")
    .then(response => response.text())
    .then(result  => console.log(result))
    .catch(error => console.log('error', error));  
}

handleFetchErrors()

/* EXERCISE 5 */

