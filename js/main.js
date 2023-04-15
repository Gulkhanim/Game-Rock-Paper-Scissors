var RockPaper = ["r","p","s"];


var player1Point=0;
 var player2Point = 0

function randomRockPaperSelector(arr) {
    var randomNumber = Math.floor(Math.random() * arr.length );

    return arr[randomNumber];

}

function showRPS(p1,p2){
 playerFirstPoint.innerText = `Point: ${player1Point}`;
 playerSecondPoint.innerText = `Point: ${player2Point}`;

playerFirstRPS.src = `./Assents/images/${p1}.jpg`;
playerSecondRPS.src = `./Assents/images/${p2}.jpg`;

}


randomRockPaperSelector (RockPaper);

function startGame(e) {
    var firstPlayerChoose = e.key;
    

if ( !RockPaper.includes(firstPlayerChoose)){
    alert("please correct choose item: 'r,p,s'");
    return;
}

var secondPlayerChoose = randomRockPaperSelector(RockPaper);
// console.log(secondPlayerChoose, '2 player')

    console.log("firstPlayerChoose", firstPlayerChoose);
    console.log("secondPlayerChoose", secondPlayerChoose);



if(
    (firstPlayerChoose === "r" && secondPlayerChoose === "s")||
    (firstPlayerChoose === "p" && secondPlayerChoose === "r")||
    (firstPlayerChoose === "s" && secondPlayerChoose === "p")
    
){
    

    playerFirstTitle.innerHTML = "You WIN" 
    playerFirstTitle.style.color = "green";
    playerSecondTitle.innerHTML = "COMP LOSe";
    playerSecondTitle.style.color = 'red'

    player1Point += 1;

    showRPS(firstPlayerChoose,secondPlayerChoose)

}else if (
   ( firstPlayerChoose === "r" && secondPlayerChoose === "r")||
    (firstPlayerChoose === "s" && secondPlayerChoose === "s")||
    (firstPlayerChoose === "p" && secondPlayerChoose === "p") 
){
    // textsizeEl.style.color = e.target.value.length >20 ? "red": "black";

    playerFirstTitle.innerHTML = "You DRAW";
    playerFirstTitle.style.color = "blue";
    playerSecondTitle.innerHTML = "COMP DRAW";
    playerSecondTitle.style.color = "blue"

    showRPS(firstPlayerChoose,secondPlayerChoose)

}else {
    playerFirstTitle.innerHTML = "You lost";
    playerFirstTitle.style.color = "red"
    playerSecondTitle.innerHTML = "COMP WIN";
    playerSecondTitle.style.color = 'green'

    player2Point += 1;

    showRPS(firstPlayerChoose,secondPlayerChoose)
}

playerFirstPoint.innerHTML = ` Point:${player1Point}`;
playerSecondPoint.innerHTML = `Point:${player2Point}`
}
window.addEventListener("keyup",startGame);


