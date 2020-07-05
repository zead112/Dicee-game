// num1
var randomnumber1 =Math.floor(Math.random()*6)+1;
var randomDiceImage ="dice"+ randomnumber1+".png";
var randomImageSource ="images/"+ randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
// num2
var randomnumber2 =Math.floor(Math.random()*6)+1;
var randomDiceImage ="dice"+ randomnumber2+".png";
var randomImageSource ="images/"+ randomDiceImage;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource);
// if num1 win
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="player 1 wins"
}
else if (randomnumber2>randomnumber1){document.querySelector("h1").innerHTML="player 2 wins"}
else {document.querySelector("h1").innerHTML="Draw!"}