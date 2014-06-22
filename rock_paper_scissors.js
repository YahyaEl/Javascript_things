/***** first javascript program: rock_paper_Scissors *******/
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();// Math.random gives a random number btw 0 and 1
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(userChoice,computerChoice){
    if(userChoice == computerChoice){
        return "The result is a tie!";    
    }  
    // this is for rock case
    else if(userChoice=="rock"){
        
        if(computerChoice=="scissors"){
            return "rock wins";    
        }
        
        else if(computerChoice=="paper"){
            return "paper wins"; 
        }
    }
    // this is for the paper case
    else if(userChoice=="paper"){
        if(computerChoice=="rock"){
            return "paper wins";
        }    
        else if(computerChoice=="scissors"){
            return "scissors wins";
        }
    }
    //this is for the scissors case
    else if(userChoice=="scissors"){
        if(computerChoice=="rock"){
            return "rock wins";
        }
        else if(computerChoice="paper"){
            return "scissors wins";    
        }
    }
}

var result= compare(userChoice,computerChoice);
console.log(result);