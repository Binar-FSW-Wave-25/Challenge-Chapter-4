/* PLAYER */
const   playerRock = document.getElementById("btn-rock-player"),
        playerPaper = document.getElementById("btn-paper-player"),
        playerScissor = document.getElementById("btn-scissor-player");


/* COMPUTER */
const   computerRock = document.getElementById("btn-rock-computer"),
        computerPaper = document.getElementById("btn-paper-computer"),
        computerScissor = document.getElementById("btn-scissor-computer");

/* VS */
const vs = document.querySelector(".vs");

/* Refresh */
const refresh = document.querySelector(".refresh-icon");

/* Rules Pickup */
playerRock.addEventListener("click", () => {
    playerRock.classList.add("pick");
    playerPaper.setAttribute("disabled", true);
    playerScissor.setAttribute("disabled", true);
    return pickOption(playerRock);
  });

playerPaper.addEventListener("click", () => {
    playerPaper.classList.add("pick");
    playerRock.setAttribute("disabled", true);
    playerScissor.setAttribute("disabled", true);
    return pickOption(playerPaper);
  });

playerScissor.addEventListener("click", () => {
    playerScissor.classList.add("pick");
    playerPapee.setAttribute("disabled", true);
    playerRock.setAttribute("disabled", true);
    return pickOption(playerScissor);
  });

/* Class */
class startGame{
    constructor(){
        this.player = "PLAYER 1";
        this.computer = "COM";
        this.win = "";
        this.playerOption;
        this.computerOption;
    }

    /* Encapsulation */
    set playerSet(ply){
        this.playerOption = ply;
    }

    get playerGet(){
        return this.playerOption;
    }

    set computerSet(ply){
        this.computerOption = ply;
    }

    get computerGet(){
        return this.computerOption;
    }

    /* Method */

    /* computer random pickup */
    computerRandom(){
        const computerChoice = [computerRock, computerPaper, computerScissor];
        const random = Math.floor(Math.random() * 3);
        const computerResult = computerChoice[random];
        computerResult.classList.add("pick");
        return computerResult;
    }

    /* Win Algorithm */
    winProcess(){
        if(this.computerOption == playerRock && this.playerOption == playerScissor){
            this.win = this.player;
        } else if(this.computerOption == playerRock && this.playerOption == playerPaper){
            this.win = this.computer;
        } else if(this.computerOption == playerPaper && this.playerOption == playerScissor){
            this.win = this.player;
        } else if(this.computerOption == playerPaper && this.playerOption == playerRock){
            this.win = this.computer;
        } else if(this.computerOption == playerScissor && this.playerOption == playerPaper){
            this.win = this.player;
        } else if(this.computerOption == playerScissor && this.playerOption == playerRock){
            this.win = this.computer
        } else {
            this.win = "DRAW";
        }
        return this.win;
    }

    /* Change VS */
    changeVS(){
        if(this.win == "DRAW"){
            vs.classList.add("win");
            vs.innerHTML = "DRAW";
            return;
        }else{
            vs.classList.remove("vs");
            vs.classList.add("win");
            vs.innerHTML = '${this.win} \n WIN';
        }
    }
}

/* Function */
function pickup(yeah){
    const startTheGame = new startGame();
    startTheGame.playerOption = yeah;
    startTheGame.computerOption = startTheGame.computerRandom();
    startTheGame.winProcess();
    startTheGame.changeVS();
}

refresh.addEventListener("click", () => {
    playerRock.classList.remove("pick");
    playerPaper.classList.remove("pick");
    playerScissor.classList.remove("pick");
    playerRock.removeAttribute("dissabled");
    playerPaper.removeAttribute("dissabled");
    playerScissor.removeAttribute("dissabled");
    computerRock.classList.remove("pick");
    computerPaper.classList.remove("pick");
    computerScissor.classList.remove("pick");
    vs.classList.remove("win");
    vs.classList.add("vs");
    vs.innerHTML = "VS";
})