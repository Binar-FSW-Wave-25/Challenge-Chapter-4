const pemain=document.querySelectorAll(".pemain")
const kompi=document.querySelectorAll(".kompi")
const versus = document.querySelector("#win");
const resetButton = document.querySelector("#reset");

pemain[0].addEventListener("click", () => {
  pemain[0].classList.add("pick");
  pemain[1].setAttribute("disabled", true);
  pemain[2].setAttribute("disabled", true);
  return pickOption(pemain[0]);
});
pemain[1].addEventListener("click", () => {
  pemain[1].classList.add("pick");
  pemain[0].setAttribute("disabled", true);
  pemain[2].setAttribute("disabled", true);
  return pickOption(pemain[1]);
});

pemain[2].addEventListener("click", () => {
  pemain[2].classList.add("pick");
  pemain[0].setAttribute("disabled", true);
  pemain[1].setAttribute("disabled", true);
  return pickOption(pemain[2]);
});

class Start {
  constructor() {
    this.playerName = "PLAYER 1";
    this.botName = "COM";
    this.playerOption;
    this.compOption;
    this.winner = "";
  }

  get getPlayerOption() {
    return this.playerOption;
  }

  set setPlayerOption(option) {
    this.playerOption = option;
  }

  get getCompOption() {
    return this.compOption;
  }

  set setCompOption(option) {
    this.compOption = option;
  }

  acak() {
    const option = [kompi[0], kompi[1], kompi[2]];
    const bot = option[Math.floor(Math.random() * option.length)];
    bot.classList.add("pick");
    return bot;
  }

  aturan() {
    if (this.compOption == kompi[1] && this.playerOption == pemain[2]) {
      this.winner = this.playerName;
    } else if (this.compOption == kompi[1] && this.playerOption == pemain[0]) {
      this.winner = this.botName;
    } else if (this.compOption == kompi[2] && this.playerOption == pemain[1]) {
      this.winner = this.botName;
    } else if (this.compOption == kompi[2] && this.playerOption == pemain[0]) {
      this.winner = this.playerName;
    } else if (this.compOption == kompi[0] && this.playerOption == pemain[1]) {
      this.winner = this.playerName;
    } else if (this.compOption == kompi[0] && this.playerOption == pemain[2]) {
      this.winner = this.botName;
    } else {
      this.winner = "DRAW";
    }
    return this.winner;
  }

  matchResult() {
    if (this.winner != "DRAW") {
      versus.classList.remove("versus");
      versus.classList.add("winner");
      versus.innerText = `${this.winner} \n WIN`;
      return;
    } else {
      versus.classList.add("draw");
      versus.innerText = "DRAW";
      return;
    }
  }
}

function pickOption(params) {
  const start = new Start();
  start.playerOption = params;
  start.setCompOption = start.acak();
  start.aturan();
  start.matchResult();
}

resetButton.addEventListener("click", () => {
  pemain[0].classList.remove("pick");
  pemain[1].classList.remove("pick");
  pemain[2].classList.remove("pick");
  pemain[0].removeAttribute("disabled");
  pemain[1].removeAttribute("disabled");
  pemain[2].removeAttribute("disabled");
  kompi[0].classList.remove("pick");
  kompi[1].classList.remove("pick");
  kompi[2].classList.remove("pick");
  versus.classList.remove("winner");
  versus.classList.remove("draw");
  versus.classList.add("versus");
  versus.innerText = "VS";
});
