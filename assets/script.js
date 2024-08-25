//This is what greets/informs the user and registers the user's name 
alert(" Welcome to Battle Blitz! This is a world tournament where the combatants have to rush and break through multiple opponents one after another thus a Blitz!!")
const playerName = prompt("Let's register you for combat.  What is your name ? ")
console.log(playerName);
alert("Alright let's get right into the fray " + playerName + "!")

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

//Stats of user and foe
var playerHealth = 100;
var playerAttack = 20;
var playerMoney = 60; 

var foeName = ["Zero", "Sigma","Bass"]
var foeHealth = 60;
var foeAttack =30;


//Function expression 
var fight = function(enemyName){
//Thoughts of adding an image to pop in of battle when this function is called
 alert("Battle Animation !!!!!")

//while loop that checks conditions of the player and the enemy to proceed with the encounter 
 while(playerHealth > 0 && foeHealth> 0){



//Prompt that ask if the user wants to fight
 var promptFight = prompt("Are you ready to fight or do you want to skip?")
if(promptFight === "fight" || promptFight === "FIGHT") {
    


 //Player Attack Turn 
 var damage = randomNumber(playerAttack - 3, playerAttack);

 foeHealth = Math.max(0, foeHealth - damage)
console.log(  playerName + " attacked " + enemyName + "! " + enemyName + " has " + foeHealth + " health left");

if( foeHealth <= 0) {
   alert(enemyName + " was not able to keep up !")
   
    console.log(enemyName + " was devastated!!!")
    break;
}
else{
  console.log(enemyName + " is not done yet!!!")
}


//Foe Attack Turn
  playerHealth =Math.max(0, playerHealth - foeAttack);
  console.log( enemyName + " attacked " + playerName + "! " + playerName + " has " + playerHealth + " health left");



    
  if( playerHealth <= 0) {
    console.log(playerName + " was knocked out ")
   alert(" It's all over for " + playerName +  "!"); 
   break;
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
    playerMoney = Math.max(0,playerMoney - penaltyFee)
    alert(playerName + " has paid a "  + penaltyFee + " penalty fee. " + playerName + " has " + playerMoney + " dollars left." );
    break;
 }
 else {
  fight();
 }
}
   else {
    alert(" You have to make a valid choice here."); 
    
    fight();
   }
  }
  
};
//function to start the game
var startGame = function(){
//reset players health
 playerHealth = 100;
 playerAttack = randomNumber(30,60);
 playerMoney = 60;

// A for loop that iterates through each enemy of the array within the loop is the function call
for(var i = 0; i < foeName.length; i++){

  if(playerHealth > 0 ){
    alert(" Let's Blitz Round " + (i +1));
  }

  //Debugger occurs before the function call 
   //debugger;

chosenFoeName = foeName[i];
//FoeHealth  and attack randomized 
foeHealth = randomNumber(40,80);
foeAttack = randomNumber(10,30);


  fight(chosenFoeName);

  if( playerHealth>0 &&foeName.length -1 ){
    var shopConfirm = confirm(" With the conclusion of that battle would you like to visit the store ?")
    //activate shop function if chosen yes 
    if(shopConfirm){

    
    shop();
    }
  };

}

};

var endGame = function(){
  if (playerHealth > 0){
  alert(" That's the end of the Blitz. Check out your performance !!!");
  alert(playerName + " has won " + playerMoney +  " dollars")
}
else{ 
  alert(" Nice Try");
}
var playAgainConfirm = confirm( "Would you like to play again");

if(playAgainConfirm) {
  startGame();
}
else {
  alert("Appreciate the participation in Blitz. Be sure to strike again soon !!")
}
}
//shop functionality
var shop = function(){
  var ShopPrompt = prompt( "Do you want to (1) refill health, (2) upgrade attack or (3) leave the shop ? Choose an option ")
  switch(ShopPrompt){
  //case to refill health 
    case "1" :
      if (playerMoney > 10 ){
        alert( "Health was refilled by 20")
      playerHealth = playerHealth + 20
      playerMoney = playerMoney - 10 
      break;
    }
    else{
      alert(playerName + " cannot afford this purchase ");
    }
    //case to increase attack power 
      case "2" :
        if (playerMoney > 10 ){
        alert( "Attack was incread by 10")
        playerAttack = playerAttack + 10
        playerMoney = playerMoney - 10 
        break;

      }
      else {
        alert(playerName + " cannot afford this purchase ")
      }

      case "3" :
          alert( playerName + " left the shop ")
        
          break;
      default:
        alert(" A valid option needs to be chosen");
      //shop function is called again
       shop();
       break;
  }
};

startGame();
endGame();