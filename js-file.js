const container = document.querySelector("#container");

//This is a red text that says hey Im red
const redStyle = document.createElement("p");
redStyle.style.color = 'red';
redStyle.textContent = "Hey I’m red!";
container.appendChild(redStyle);

//an <h3> with blue text that says “I’m a blue h3!”
const blueText = document.createElement("h3")
blueText.style.color = 'blue';
blueText.textContent = "I'm a blue h3!";
container.appendChild(blueText);

/* a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!” */
const div = document.createElement("div");
const inSide1 = document.createElement("div");
const inSide2 = document.createElement("div");
div.style.border = "thick solid #0000FF";
div.style.backgroundColor = "pink";
inSide1.textContent = "I'm in a div";
inSide2.textContent = "ME TOO";
div.appendChild(inSide1);
div.appendChild(inSide2);
container.appendChild(div);

