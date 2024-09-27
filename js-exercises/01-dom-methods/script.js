container = document.querySelector('#addStuff');

redP = document.createElement('p');
redP.textContent = "Hey I'm red!"
redP.style.color = "red";
container.appendChild(redP);

blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue";
container.appendChild(blueH3);

blackDiv = document.createElement('div');
blackDiv.style.border = '1px solid black';
blackDiv.style.backgroundColor = "pink";

newH1 = document.createElement('h1');
newH1.textContent = "I’m in a div";
newP = document.createElement('p');
newP.textContent = "ME TOO!";

blackDiv.appendChild(newH1);
blackDiv.appendChild(newP);

container.appendChild(blackDiv);