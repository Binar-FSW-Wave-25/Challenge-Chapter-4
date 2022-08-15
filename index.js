class Setting {
  constructor(player) {
    this.player = player,
    this._com = ""
  }

  set com(com) {
    this._com = com;
  }

  get com() {
    return this._com;
  }

  setcom(com){
    this._com = com;
  }

  getcom(){
    return this._com;
  }

  #isRandom() {
    let com = ['paper', 'rock', 'scissors'];
    return com[Math.floor(Math.random() * com.length)]; 
  }

  getIsRandom(){
    return this.#isRandom();
  }

  #isRule() {
    let player = this.player;
    this.getcom();
    let comPick = this._com;

    if(
      (player === 'paper' && comPick === 'rock') || 
      (player === "rock" && comPick === "scissors") || 
      (player === "scissors" && comPick === "paper")) {
        return "win";
    } else if (player === comPick) {
      return "draw";
    } else {
      return "lose";
    }
  }

  getIsRule(){
    return this.#isRule();
  }
}

class Gameplay extends Setting {
  constructor(player,winner) {
    super(player);
    this.winner = winner
  }

  play() {
    return this.getIsRule();
  }

  matchResult(){
    if (this.getIsRule() === "win"){
      console.log(`player: ${this.player} com: ${this._com} | player menang`)
    } else if (this.getIsRule() === "lose"){
      console.log(`player: ${this.player} com: ${this._com} | com menang`);
    } else {
      console.log(`player: ${this.player} com: ${this._com} | yah imbang`)
    }
    return this.winner;
  }
}

let game = new Gameplay();
document.getElementById("gamesuit").addEventListener("click",gameStart);
document.getElementById("reset").addEventListener("click",resetGame);

function gameStart(props) {
  if (
  props.target.id === "rock" || 
  props.target.id === "scissors" || 
  props.target.id === "paper") {
      document.getElementById(props.target.id).classList.toggle("activePick");
      game.player = props.target.id;
      game.setcom(game.getIsRandom());
      document.getElementById(`com${game.getcom()}`).classList.add("activePick");
      document.getElementById(game.getIsRule()).style.visibility = "visible";
      document.getElementById("vs").style.visibility = "hidden";
      game.matchResult();
      if (game.player != null) {
        document.getElementById("gamesuit").removeEventListener("click",gameStart);
        document.getElementById("gamesuit").addEventListener("click",pleaseReset);
      }
  }
}

function pleaseReset() {
  alert("Klik Button Refresh");
}

function resetGame(){
  document.getElementById("gamesuit").removeEventListener("click",pleaseReset);
  document.getElementById("gamesuit").addEventListener("click",gameStart);
  document.getElementById(game.player).classList.remove("activePick");
  document.getElementById(`com${game.getcom()}`).classList.remove("activePick");
  document.getElementById(game.getIsRule()).style.visibility = "hidden";
  document.getElementById("vs").style.visibility = "visible";
}