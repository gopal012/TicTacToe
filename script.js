const ting = new Audio("ting2.mp3");
const gameOver = new Audio("gameover.mp3");
let turn = "X";
let gameover = false;

//Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "O" : "X";
}

//Function to check win
const checkWin = ()=>{
    let boxTexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e=>{
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && (boxTexts[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " Won";
            gameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "37vh";
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

//Main Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxText = element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// let reset = document.getElementById("reset");
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    console.log("entry");
    Array.from(boxtexts).forEach((element) => {
        element.innerText = "";
        console.log("hy");
    });
    turn = "X";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    gameover = false;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0vw";
    document.querySelector(".line").style.width = "0vw";
})