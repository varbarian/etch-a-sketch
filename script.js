const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('containerStyle');
body.appendChild(container);

const btn = document.querySelector('button');

//create a grid with 16 cells & group them in a class named squared
function grid(){
    for ( i = 0; i <= userPick**2 - 1; i++){
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.classList.add('squared');
        // newDiv.addEventListener('mouseover', () =>
        // newDiv.classList.add('changeColor'));
    }
};

function remGrid(){
    container.parentNode.removeChild('.squared');
};

let userPick = undefined;
function promptUser(){
    userPick = prompt('How many squares a side?');
    if (userPick > 100) {
        alert("can't choose a value over 100. try again");
        promptUser();
    } else if (isNaN(userPick)) {
        alert("this is not a number. try again");
        promptUser();
    } else if (userPick <= 0) {
        alert("try to pick a number over a 0");
        promptUser();
    }
}

btn.addEventListener('click', masterCall);

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
};

function startResize() {
    newSize = 100/userPick;
    const squares = document.getElementsByClassName('squared');
    for (i=0; i < squares.length; i++) {
        squares[i].style.width = `${newSize}%`;
        squares[i].style.height = `${newSize}%`;
    }
};

function rgb() {
    const x = Math.floor(Math.random()*256);
    const y = Math.floor(Math.random()*256);
    const z = Math.floor(Math.random()*256);
    const randomColor = `( ${x}, ${y}, ${z} )`;
    return randomColor;
 };

function painter()  {
    const miniDivs = document.getElementsByClassName('squared');
    //make an array out of miniDivs (is nodelist)
    const divArray = Array.from(miniDivs);
    divArray.forEach((div) => {
        div.addEventListener('mouseover', () => {
            newColor = rgb(),
            console.log(newColor);
            div.style.backgroundColor = `rgb${newColor}`;
        });
      });
    };

function masterCall() {
    clearGrid();
    promptUser();
    grid();
    startResize();
    painter();
};

//UNFINISHED!!! TO BE DONE:
//"Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black."

// const miniDivs = document.getElementsByClassName('squared');
// const divArray = Array.from(miniDivs);
// console.log(miniDivs);

