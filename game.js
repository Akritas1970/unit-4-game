
//Function to start game
$(document).ready(function() {
//Setting global variables

//Variables to hold values for the crystals
var rubyValue = Math.floor(Math.random() * 13);
var emeraldValue = Math.floor(Math.random() * 13);
var sapphireValue = Math.floor(Math.random() * 13);
var amethystValue = Math.floor(Math.random() * 13);
crystalValue = [rubyValue, emeraldValue, sapphireValue, amethystValue];
yourTargetNumber = Math.floor(Math.random() * (0, 101) + 19);


//When play button is clicked sets random values for target number and crystals

$("#playButton").on("click", function(){
    $(this).hide();
   $("#target").append(yourTargetNumber);
   $(".gem").crystalValue;
  
  //other possible variables
   //$("#ruby").rubyValue;
   //$("#emerald").emeraldValue;
   //$("#sapphire").sapphireValue;
   //$("#amethyst").amethystValue;
});
//crystalValue();
//function crystalValue() {
   // Math.floor(Math.random() * 13);
//};

//Variables for the score
var yourScore = 0;
var yourNewScore = yourScore + crystalValue;

//Variables for wins and losses
var wins = 0;
var losses = 0;
var score = $(".gem").on("click", function(){
    crystalValue.value + yourScore;
    $("#score").html(eval(yourNewScore));
    
});
 while (yourNewScore < yourTargetNumber){
  //function to keep adding to yourNewscore
 };
 
//if then function to check if yourNewScore === yourTargetNumber 
 //then alert "You Won!" and wins++;
 //else if yourNewScore > yourTargetNumber then alert "You lost!" and losses++;        






});