const rock_user = document.getElementById('rock-user');
const paper_user = document.getElementById('paper-user');
const scissors_user = document.getElementById('scissor-user');
const refresh = document.getElementById("refresh");
const inFo = document.getElementById("h1");
const winBox = document.getElementById('box');
const elemen = [...document.getElementsByClassName('dissap')]
const rock_com = document.getElementById('rock-com');
const paper_com = document.getElementById('paper-com');
const scissors_com = document.getElementById('scissor-com');


class Suit{
    constructor(computer) {
        this._player = "";
        this.computer = computer;
    }

    set player(ply){
        this._player = ply;
    }

    get player (){
        return this._player;
    }

    changeValue(ply){
        this.player = ply;
    }

    getValue(){
        this.player()
    }

    botBrain() {
        const option = ["kertas", "gunting", "batu"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }


    winCalculation() {
        if (this.computer === "kertas") {
            paper_com.classList.add("chosen");
            if (this.player === "kertas"){
                return "Draw";
            } else if (this.player === "gunting"){
                return "Player 1  Win"
            } else if(this.player === "batu"){
                return "Com Win"
            }
        } else if (this.computer === "gunting") {
            scissors_com.classList.add("chosen");
            if (this.player === "gunting"){
                return "Draw";
            } else if (this.player === "batu"){
                return "Player 1 Win"
            } else if(this.player === "kertas"){
                return "Com Win"
            }
        } else if (this.computer === "batu") {
            rock_com.classList.add("chosen");
            if (this.player === "batu"){
                return "Draw";
            } else if (this.player === "kertas"){
                return "Player 1 Win"
            } else if(this.player === "gunting"){
                return "Com Win"
            }
        }
    }
}

class Play extends Suit {
    constructor(player, computer){
        super(computer);
        this.playerConctructor = player;
    }

    play (){
        this.changeValue(this.playerConctructor)
        return this.winCalculation();
    }

    resultObject(a) {
        winBox.classList.add('Box');
        inFo.textContent= a  ; // parameter a ini nantiya akan diisi dgn method play() yana akan mereturn hasil kemenengan
        inFo.setAttribute("style", "font-size:36px; color:white;");
    }
}

//memilih pilihan player dan com untuk ditandingkan serta menambahkan efek
function pickOption(params) {
    const start = new Play();
    start.playerConctructor = params;
    start.computer = start.botBrain();

    start.resultObject(start.play());
    console.log(`${start.playerConctructor} VS ${start.computer}`);

    //menambahkan efek untuk tidak bisa di klik lagi
    elemen.forEach(element1 => {
        element1.setAttribute("style", "cursor: not-allowed;pointer-events: none;")
    }) 
    
}

function Playing (){
    rock_user.addEventListener("click", function(){
        rock_user.classList.add("chosen");
        pickOption("batu");
    })

    scissors_user.addEventListener("click", function(){
        scissors_user.classList.add("chosen");
        pickOption("gunting");
    })

    paper_user.addEventListener("click", function(){
        paper_user.classList.add("chosen");
        pickOption("kertas");
    })
}

Playing()

refresh.addEventListener('click', function () {
    //window.location.reload();

    //mengembalikan tulisan VS
    winBox.classList.remove("Box");
    inFo.style.marginTop = null;
    inFo.innerText = "VS";
    inFo.style.fontSize = null;
    inFo.removeAttribute("style", "color: ''; font-size:'' ")

    //menghilangkan efek agar bisa di klik lagi dan efek kotak pada pilihan
    elemen.forEach(elemen2 => {
        elemen2.removeAttribute("style", "cursor: not-allowed;pointer-events: none;");
    })
    elemen.forEach(elemen3 => {
        elemen3.classList.remove("chosen");
    })
})





