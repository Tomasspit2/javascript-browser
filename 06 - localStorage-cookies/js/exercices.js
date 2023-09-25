/* EXERCISE 1 */

/* GET THE FORM, ADD EVENT LISTENER */
var form = document.getElementById('form1');
form.addEventListener('submit', handleSubmit);
let localStorage;

/* BLOCK THE SUBMITION AND GET THE VALUE, STOCK IT IN THE LOCALSTORAGE1 VARIABLE */
function handleSubmit(event) {
    event.preventDefault();  
    localStorage = document.getElementById('text').value;
    console.log('Text value:', localStorage);

/* EXERCISE 2 */
/* ADD THE LOCALSTORAGE1 INTO THE MODAL DIV */    
    myDiv.innerHTML = localStorage;

/* EXERCISE 3 */
    /* STOCK THE LOCALSTORAGE1 IN A COOKIE AND ALERT THE USER */
    document.cookie = (localStorage)
    alert('Your information has been stored!');
    
/* EXERCISE 4 */    
    /* INSERT THE COOKIE INTO THE HTML DIALOG */
    myDiv2.innerHTML = document.cookie;
}

function deleteContent() {
    
    document.cookie = null;
    alert('Content Removed');
    console.log('Text Value: ', document.cookie);
}

function deleteCookie() {
    deleteCookie('document.cookie');
    alert('Cookie Deleted');
    console.log(document.cookie)
}

/* CREATION OF THE MODALS AS SEEN IN JS02 EVENTS MANAGEMENT */

const buttonShow = document.getElementById('my-button');
const dialog = document.getElementById('my-dialog');
const myDiv = document.getElementById('my-div');

/* Add eventlistener on click to the button to open Modal */
buttonShow.addEventListener('click', () => {dialog.showModal();});

/* Close dialog if click is different then click on my-div */
dialog.addEventListener('click', (event) => {
    if (event.target.id !== 'myDiv') {
        dialog.close();
    }
});

/* SECOND MODAL */

const buttonShow2 = document.getElementById('my-button2');
const dialog2 = document.getElementById('my-dialog2');
const myDiv2 = document.getElementById('my-div2');

/* Add eventlistener on click to the button to open Modal */
buttonShow2.addEventListener('click', () => {dialog2.showModal();});

/* Close dialog if click is different then click on my-div */
dialog2.addEventListener('click', (event) => {
    if (event.target.id !== 'myDiv2') {
        dialog2.close();
    }
});



