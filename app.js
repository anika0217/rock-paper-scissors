let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");



const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];

}



const drawgame= () => {
    console.log("Game was draw.");
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "lightblue";
}



const showwinner = (userwin, userchoice, compchoice ) => {
    if(userwin) {
        user_score++;
        userscorepara.innerText = user_score;
        console.log("You win");
        msg.innerText = `You win <3.Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "#00cc7a"
    }
    else {
        comp_score++;
        compscorepara.innerText = comp_score;
        console.log("You lose");
        msg.innerText = `You lose :(. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "#F46868"
    }

}




const playgame = (userchoice) => {
    console.log("User choice: ",userchoice);
    const compchoice = gencompchoice();
    console.log("Comp choice: ",compchoice);

    if(userchoice === compchoice) {
        drawgame();
    }
    else {
        let userwin = true;
        if(userchoice === "rock") {
           userwin = compchoice === "paper"? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors"? false: true; 
        }
        else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice,compchoice);
    }
    

};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userchoice  = choice.getAttribute("id")
        playgame(userchoice);
    }); 
});