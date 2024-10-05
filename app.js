let boxes=document.querySelectorAll(".button");
let reset=document.querySelector(".reset");
let msgContainer=document.querySelector(".msg-Container");
let msg = document.querySelector("#msg");
let newGame= document.querySelector("#new");
let turn0=true;
let count=0;
const Winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];
const resetGame = () => {
    turn0=true;
    enable();
    count=0;
    msgContainer.classList.add("hide");
};

boxes.forEach((button) => {
    button.addEventListener("click",() =>{
        if(turn0){
            button.innerText="O";
            turn0=false;
        }
        else{
            button.innerText="X";
            turn0=true;
        }
        button.disabled= true;
        count++;
        let win = checkWinner();
        if(count===9 && !win){
            draw();
        }
    });
});
const draw = () => {
    msg.innerText=`HAHA...It's a draw`;
    msgContainer.classList.remove("hide");
    disable();
};
const disable = () =>{
    for(let button of boxes){
        button.disabled = true;
    }
};
const enable = () =>{
    for(let button of boxes){
        button.disabled=false;
        button.innerText="";
    }
};
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable();
};
const checkWinner = ()=>{
    for(pattern of Winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2===pos3){
                showWinner(pos1);
                return true;
            }
        }
    }
};
reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);
