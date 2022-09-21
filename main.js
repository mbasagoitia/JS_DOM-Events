console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1 = document.getElementById("node1");
node1.innerText = `I used the getElementById("node1") method to access this`;
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2 = document.getElementsByClassName("node2");
node2[0].innerText = `I used the getElementByClassName("node2") method to access this`;
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const nodes345 = document.getElementsByTagName("h3");
for (let node of nodes345) {
    node.innerText = `I used the getElementByTagName("h3") method to access all of these`;
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const paragraph = document.createElement("p");
paragraph.innerText = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
const parent = document.querySelector("#parent");
parent.appendChild(paragraph);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const link = document.createElement("a");
// BONUS: Add a link href to the <a>
link.innerText = "I am a <a> tag";
link.href = "https://www.youtube.com/";
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(link, paragraph);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const parentNode = document.querySelector("#exercise-container3");
const currentChild = document.querySelector("#N1");
const newChild = document.createElement("p");
newChild.innerText = "New Child Node";
parentNode.replaceChild(newChild, currentChild);
// TODO: Remove the "New Child Node"
parentNode.removeChild(newChild);
/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element
const unorderedList = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
for (let item of list) {
    let li = document.createElement("li");
    li.textContent = item;
    unorderedList.appendChild(li);
}
// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 
const container4 = document.querySelector("#container");
container4.appendChild(unorderedList);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

const body = document.querySelector("body");
const button = document.querySelector("#btn");

function show() {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.classList.add("modal-card");
    modal.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close the modal";
    modal.appendChild(closeButton);
    closeButton.addEventListener("click", () => {
        body.removeChild(modal);
    })
    body.appendChild(modal);
}

button.addEventListener("click", show);

