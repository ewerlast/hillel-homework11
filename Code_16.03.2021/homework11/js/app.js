let body = document.querySelector('body');



function createDiv() {
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.innerHTML = "0";
    div.appendChild(p);
    div.appendChild(creatButton("+", "plus"));
    div.appendChild(creatButton("-", "minus"));
    return div;
}

function creatButton(value, addClass) {
    let button = document.createElement('button');
    button.innerHTML = `${value}`;
    button.type = "button";
    button.className = `${addClass}`;
    return button;
}
for (let i = 0; i < 5; i++) {
    body.appendChild(createDiv());
}

// //////////////////////////////////////////////

let color = ["red", "blue", "black"];
let div = document.querySelectorAll('div');

function randomColorDiv(arr) {
    let count = 0;
    let check = 1;

    function setColor(event) {
        if (event.target.tagName === "DIV") {
            event.target.style.backgroundColor = `${arr[count]}`;
            event.target.firstChild.innerHTML = `${check}`;

        }
        if (event.target.className === "plus") {
            event.target.parentNode.firstChild.innerHTML = `${check}`;
        }
        if (event.target.className === "minus") {
            event.target.parentNode.firstChild.innerHTML = `${check-2}`;
            return check--;
        }

        count++;
        check++;

        if (count >= arr.length) {
            return count = 0;
        }
    }
    return setColor;
}

div.forEach(element => {
    element.addEventListener('click', randomColorDiv(color));

});