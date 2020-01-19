let firstMainBoard = document.querySelector('.firstPlayer .mainBoard');
let secondMainBoard = document.querySelector('.secondPlayer .mainBoard');
let firstRivalBoard = document.querySelector('.firstPlayer .rivalBoard');
let secondRivalBoard = document.querySelector('.secondPlayer .rivalBoard');

let boards = [firstMainBoard, secondMainBoard, firstRivalBoard, secondRivalBoard]


for (let k = 0; k < boards.length; k++){
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++){
            let boardElem = document.createElement('div');
            boardElem.classList.add("el");
            boardElem.dataset.x = i;
            boardElem.dataset.y = j;
            boards[k].append(boardElem);
        }
    }
}

let boardElemFirst = document.querySelectorAll('.firstPlayer .mainBoard .el');
let boardElemSecond = document.querySelectorAll('.secondPlayer .mainBoard .el');

function addListenersForAddingShip(array){
    array.forEach(function(elem){

        elem.addEventListener('click', handlerAddShip);
    })
}

addListenersForAddingShip(boardElemFirst);
addListenersForAddingShip(boardElemSecond);

function handlerAddShip(event) {
    event.target.classList.toggle('ship');
};

let buttonPreparedFirst = document.querySelector('.firstPlayer .buttonPrepared');
let buttonPreparedSecond = document.querySelector('.secondPlayer .buttonPrepared');


buttonPreparedFirst.addEventListener('click', function removeListener(){

    boardElemFirst.forEach(function(elem){
        elem.removeEventListener('click', handlerAddShip);
    })
    
});
buttonPreparedSecond.addEventListener('click', function removeListener(){

    boardElemSecond.forEach(function(elem){
        elem.removeEventListener('click', handlerAddShip);
    })
    
});



let boardElemRivalFirst = document.querySelectorAll('.firstPlayer .rivalBoard .el');
let boardElemRivalSecond = document.querySelectorAll('.secondPlayer .rivalBoard .el');

function addListenersForCheckingShip(array){
    array.forEach(function(elem){
        elem.addEventListener('click', checkingShip);
    })
}

addListenersForCheckingShip(boardElemRivalFirst);
addListenersForCheckingShip(boardElemRivalSecond);

function checkingShip(){
    if (){

    }
}