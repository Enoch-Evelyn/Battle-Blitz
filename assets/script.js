//This is what greets/informs the user and registers the user's name 
alert(" Welcome to Battle Blitz! This is a world tournament where the combatants have to rush and break through multiple opponents one after another thus a Blitz!!")
const playerName = prompt("Let's register you for combat.  What is your name ? ")
console.log(playerName);
alert("Alright let's get right into the fray " + playerName + "!")

//Stats of user and foe
var playerHealth = 100;
var playerAttack = 20;
var playerMoney = 100; 

var foeName = ["Zero", "Sigma","Bass"]
var foeHealth = 60;
var foeAttack = 20;

//Function expression 
var fight = function(enemyName){
//Thoughts of adding an image to pop in of battle when this function is called
 alert("Battle Animation !!!!!")

//Prompt that ask if the user wants to fight
 var promptFight = prompt("Are you ready to fight or do you want to skip?")
if(promptFight === "fight" || promptFight === "FIGHT") {
    


 //Player Attack Turn 
 foeHealth = foeHealth - playerAttack;
console.log(  playerName + " attacked " + enemyName + "! " + enemyName + " has " + foeHealth + " health left");

if( foeHealth === 0) {

    console.log(enemyName + " was devastated!!!")
}
else{
  console.log(enemyName + " is not done yet!!!")
}


//Foe Attack Turn
  playerHealth = playerHealth - foeAttack;
  console.log( enemyName + " attacked " + playerName + "! " + playerName + " has " + playerHealth + " health left");



    
  if( playerHealth === 0) {
    console.log(playerName + " was knocked out ")
  }
else {
    console.log (playerName + " is still in the fight.");

  }
}

 //if the user choses to skip
 else if (promptFight === "skip" || promptFight === "SKIP") {

  var confirmSkip = confirm( "If you skip this battle there will be a penalty fee. Are you sure you want to skip ?")

if (confirmSkip) {

    console.log(playerName + " chose to skip the fight! ");
    const penaltyFee = 20
    playerMoney = playerMoney - penaltyFee
    alert(playerName + " has paid a "  + penaltyFee + " penalty fee. " + playerName + " has " + playerMoney + " dollars left." );
 }
 else {
  fight();
 }
}
   else {
    alert(" You have to make a valid choice here."); 
    
    fight();
   }
  
};

// A for loop that iterates through each enemy of the array 
for(var i = 0; i < foeName.length; i++){
  fight(foeName[i]);
}