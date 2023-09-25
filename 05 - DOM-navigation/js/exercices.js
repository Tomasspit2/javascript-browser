/* EXERCISE 1 */
/* Get the UL and then get all of the children */

const list = document.getElementById('liste1');
const listItems = list.getElementsByTagName('li');

// Loop through each <li> element and add the class "redText"
for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.add('redText');
}

/* or change the color of a single li with this code: */
listItems[2].style.color = "blue"

/* EXERCISE 2 */

/* GET ELEMENT BY ID, CHANGE THE TEXT VIA INNERHTML */
let paragraph = document.getElementById("paragraphe1");

paragraph.innerHTML = "new text";

/* EXERCISE 3 */

/* GET THE PARENT, GET THE ELEMENTS INSIDE, SELECT THE ELEMENT YOU NEED, GET NEXTSIBLING, ADD STYLE */

let listeP = document.querySelector('#parent');

let selectAllPs = listeP.getElementsByTagName('p');

let current = selectAllPs[0];

let nextSibling = current.nextElementSibling;

nextSibling.style.color = 'blue';

/* EXERCISE 4 */

/* GET THE PARENTNODE FROM THE CHILD, ADD A CLASSNAME */

let name2 = document.getElementById("child").parentNode;

name2.classList.add('name2');

/* EXERCISE 5 */

/* GET PARENTNODES AND STOCK THEM IN VARIABLES, CHANGE STYLE AFTER */
let sousListe = document.getElementById("sousliste");
console.log(sousListe);
let parentSousListe = sousListe.parentElement;
let niveau1 = parentSousListe.parentElement;
let niveau2 = niveau1.parentElement;


sousListe.style.fontSize = ("20px");
parentSousListe.style.fontSize = ("30px");
niveau1.style.fontSize = ("40px");
niveau2.style.fontSize = ("50px");

/* EXERCISE 6 */

/* GET THE DATA-ATTRIBUTE VIA QUERY SELECTOR */

let data = document.querySelectorAll('[valeur]')
console.log(data);


