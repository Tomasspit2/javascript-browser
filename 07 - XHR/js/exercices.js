/* EXERCISE 1 NEW XML*/

function createXHR() {
xml = new XMLHttpRequest();
console.log(xml);
}

createXHR()

/* EXERCISE 2 GET REQUEST*/

function sendGetRequest() {
    xml.open("GET", "https://jsonplaceholder.typicode.com/users");
    xml.send();
    xml.responseType = "json";
    xml.onload = () => {
        const data = xml.response;
        console.log(data);
    }
    };

sendGetRequest();

/* EXERCISE 3 REQUEST STATES */

function handleRequestState() {
    xml.onreadystatechange = function () {
        console.log('ReadyState:', xml.readyState);
}
};

handleRequestState();

/* EXERCISE 4 REQUEST POST */
/* EXERCISE 5 HANDELING ERRORS */

function sendPostRequest()  {

const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
const body = JSON.stringify({
  title: "Hello World",
  body: "My POST request",
  userId: 900,
});

xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 201) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};

xhr.send(body)
}

sendPostRequest();

/* EXERCISE 6 CANCEL REQUEST */

function cancelRequest() {
    xml.abort();
    console.log('Request aborted');
}

cancelRequest()