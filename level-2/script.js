const newDiv = document.createElement("div");//This makes a new HTML tag in memory (it doesn't show on the page yet).

let text = document.createTextNode("Hello world from createTextNode");//This creates text you can put inside an element.
newDiv.appendChild(text);

console.log(newDiv);

document.body.appendChild(newDiv);//Adds an element inside another one (at the end).

parent.insertBefore(newElement, referenceChild);//Adds an element before another one.

element.insertAdjacentHTML("beforeend", "<p>New HTML</p>");//Inserts raw HTML at a specific position ('beforebegin', 'afterbegin', 'beforeend', 'afterend').


const li1 = document.createElement("li");
const li2 = document.createElement("li");


parent.removeChild(child);//Removes a child element from its parent.

myElement.remove();//Removes the element itself.

