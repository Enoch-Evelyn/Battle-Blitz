//This is what greets/informs the user and registers the user's name 
alert(" Welcome to Battle Blitz! This is a world tournament where the combatants have to rush and break through multiple opponents one after another thus a Blitz!!")
const playerName = prompt("Let's register you for combat.  What is your name ? ")
console.log(playerName);
alert("Alright let's get right into the fray " + playerName + "!")
var playerHealth = 100;
var playerAttack = 20;

var foeName = "Zero";
var foeHealth = 60;
var foeAttack = 20;

//Function expression 
var fight = function(){
//Thoughts of adding an image to pop in of battle when this function is called
 alert("Battle Animation !!!!!")

 //Player Attack Turn 
 foeHealth = foeHealth - playerAttack;
console.log(  playerName + " attacked " + foeName + "! " + foeName + " has " + foeHealth + " health left");

if( foeHealth === 0) {

    console.log(foeName + " was devastated!!!")
}
else{
  console.log(foeName + " is not done yet!!!")
}


//Foe Attack Turn
  playerHealth = playerHealth - foeAttack;
  console.log( foeName + " attacked " + playerName + "! " + playerName + " has " + playerHealth + " health left");



    
  if( playerHealth === 0) {
    console.log(playerName + " was knocked out ")
  }
else {
    console.log (playerName + " is still in the fight.");

}

};

fight();