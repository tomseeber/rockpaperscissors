// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["r", "p", "s"];
var humanwins=0;
var computerwins=0;
var humanlosses=0;
var computerlosses=0;
var ties=0;

document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    var userbox=document.getElementById("human_box");
    var userText = document.getElementById("userText");
    var computerText = document.getElementById("computer_guess");
    var computerPlay = document.getElementById("computer_image");
    var humanPlay = document.getElementById("human_image");
    var comptuter_wins_section =  document.getElementById("computer_wins");
    var computer_loss_section = document.getElementById("computer_loss");
    var human_win_section = document.getElementById("human_wins");
    var human_loss_section = document.getElementById("human_losses");
    var human_ties_section = document.getElementById("human_ties");
    var computer_ties_section = document.getElementById("computer_ties");

    if (( userGuess === "r")||( userGuess === "p")||( userGuess === "s"))
    {

        userText.textContent="";
        if ( userbox.classList.contains("bg-danger") ) {
            userbox.classList.remove("bg-danger");
        }

      // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        if( computerGuess === "r")
        {
            computerPlay.src='assets/images/rock.jpg';
        } else if (computerGuess === "p") {
            computerPlay.src='assets/images/paper.jpg';
        } else {
            computerPlay.src='assets/images/scissors.jpg';
        }


        if( userGuess === "r")
        {
            humanPlay.src='assets/images/rock.jpg';
        }
        else if (userGuess === "p") {
            humanPlay.src='assets/images/paper.jpg';
        } else if (userGuess === "s"){
            humanPlay.src='assets/images/scissors.jpg';
        }

        //computerText.textContent = computerGuess;
      // Alerts the key the user pressed (userGuess).
      //alert("User guess: " + userGuess);

      //possible combinations  r,p  r,s, r,r, p,p, p,s p,r...
      if ((userGuess === "r") && (computerGuess === "s")) {
        humanwins++;
      } else if ((userGuess === "r") && (computerGuess === "p")) {
        humanlosses++;
      } else if ((userGuess === "s") && (computerGuess === "r")) {
        humanlosses++;
      } else if ((userGuess === "s") && (computerGuess === "p")) {
        humanwins++;
      } else if ((userGuess === "p") && (computerGuess === "r")) {
        humanwins++;
      } else if ((userGuess === "p") && (computerGuess === "s")) {
        humanlosses++;
      } else if (userGuess === computerGuess) {
        ties++;
      }

      comptuter_wins_section.textContent=humanlosses;
      computer_loss_section.textContent=humanwins;
      human_win_section.textContent=humanwins;
      human_loss_section.textContent=humanlosses;
      human_ties_section.textContent = ties;
      computer_ties_section.textContent = ties;
      // Alerts the Computer's guess.
      console.log(humanlosses);
    }
    else{
        userbox.classList.add("bg-danger");
        userText.classList.add("w-100");
        userText.classList.add("h1");
        userText.textContent="Cheater, Not Amused, CHOOSE Rock (r), Paper(p), Scissors(s)";
    }

};
