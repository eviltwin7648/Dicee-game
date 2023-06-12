var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg = "dice" + randomnumber1 + ".png";
var imageSource = "images/" + randomDiceImg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource);

var randomnumber2 = Math.floor(Math.random()*6 + 1);

var randomDiceImg2 = "dice" + randomnumber2 + ".png";
var imageSource2 = "images/" + randomDiceImg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSource);
