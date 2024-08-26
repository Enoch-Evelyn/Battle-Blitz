//This is what greets/informs the user and registers the user's name 
alert(" Welcome to Battle Blitz! This is a world tournament where the combatants have to rush and break through multiple opponents one after another thus a Blitz!!")



var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// Player Object 
var playerInfo = {
   name: prompt("Let's register you for combat.  What is your name ? "),
   health:100,
   attack:20,
   money:60

};

 //foe object 
var foeInfo = [
  {
    name: "Zero",
    attack: 12,
  
  },
  {
    name: "Sigma",
    attack: 13
  },
  {
    name: "Bass",
    attack: 14
  }
];

console.log(playerInfo.name);
alert("Alright let's get right into the fray " + playerInfo.name + "!")

//Function expression 
var fight = function(enemyName){
//Thoughts of adding an image to pop in of battle when this function is called
 alert("Battle Animation !!!!!")

//while loop that checks conditions of the player and the enemy to proceed with the encounter 
 while(playerInfo.health > 0 && foeHealth> 0){



//Prompt that ask if the user wants to fight
 var promptFight = prompt("Are you ready to fight or do you want to skip?")
if(promptFight === "fight" || promptFight === "FIGHT") {
    


 //Player Attack Turn 
 var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

 foeHealth = Math.max(0, foeHealth - damage)
console.log(  playerInfo.name + " attacked " + enemyName + "! " + enemyName + " has " + foeHealth + " health left");

if( foeHealth <= 0) {
   alert(enemyName + " was not able to keep up !")
   
    console.log(enemyName + " was devastated!!!")
    break;
}
else{
  console.log(enemyName + " is not done yet!!!")
}


//Foe Attack Turn
  playerInfo.health =Math.max(0, playerInfo.health - foeAttack);
  console.log( enemyName + " attacked " + playerInfo.name+ "! " + playerInfo.name + " has " + playerInfo.health + " health left");



    
  if( playerInfo.health <= 0) {
    console.log(playerInfo.name + " was knocked out ")
   alert(" It's all over for " + playerInfo.name +  "!"); 
   break;
  }
else {
    console.log (playerInfo.name + " is still in the fight.");

  }
}

 //if the user choses to skip
 else if (promptFight === "skip" || promptFight === "SKIP") {

  var confirmSkip = confirm( "If you skip this battle there will be a penalty fee. Are you sure you want to skip ?")

if (confirmSkip) {

    console.log(playerInfo.name + " chose to skip the fight! ");
    const penaltyFee = 20
    playerInfo.money = Math.max(0,playerInfo.money - penaltyFee)
    alert(playerInfo.name + " has paid a "  + penaltyFee + " penalty fee. " + playerInfo.name + " has " + playerInfo.money + " dollars left." );
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
 playerInfo.health = 100;
 playerInfo.attack = randomNumber(30,60);
 playerInfo.money = 60;

// A for loop that iterates through each enemy of the array within the loop is the function call
for(var i = 0; i < foeInfo.length; i++){

  if(playerInfo.health > 0 ){
    alert(" Let's Blitz Round " + (i +1));
  }

  //Debugger occurs before the function call 
   //debugger;

var chosenFoeObj = foeInfo[i];
//FoeHealth  and attack randomized 
foeHealth = randomNumber(40,80);
foeAttack = randomNumber(10,30);


  fight(chosenFoeName);

  if( playerInfo.health>0 &&foeName.length -1 ){
    var shopConfirm = confirm(" With the conclusion of that battle would you like to visit the store ?")
    //activate shop function if chosen yes 
    if(shopConfirm){

    
    shop();
    }
  };

}

};

var endGame = function(){
  if (playerInfo.health > 0){
  alert(" That's the end of the Blitz. Check out your performance !!!");
  alert(playerInfo.name + " has won " + playerInfo.money +  " dollars")
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
      if (playerInfo.money > 10 ){
        alert( "Health was refilled by 20")
      playerInfo.health = playerInfo.health + 20
      playerInfo.money = playerInfo.money - 10 
      break;
    }
    else{
      alert(playerInfo.name + " cannot afford this purchase ");
    }
    //case to increase attack power 
      case "2" :
        if (playerInfo.money > 10 ){
        alert( "Attack was incread by 10")
        playerInfo.attack = playerInfo.attack + 10
        playerInfo.money = playerInfo.money - 10 
        break;

      }
      else {
        alert(playerInfo.name + " cannot afford this purchase ")
      }

      case "3" :
          alert( playerInfo.name + " left the shop ")
        
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