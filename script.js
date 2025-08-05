
 var images = ["./images/dice_1.png","./images/dice_2.png","./images/dice_3.png",
    "./images/dice_4.png","./images/dice_5.png","./images/dice_6.png"]
 function dice1(){
var imagePosition1 = Math.floor(Math.random()*images.length)
var image = images[imagePosition1]
document.querySelector(".dice_1").setAttribute("src",image)
return image;
}


function dice2(){
    var imagePosition2 = Math.floor(Math.random()*images.length);
    var image = images[imagePosition2]
    document.querySelector(".dice_2").setAttribute("src", image)
    return image;
}

var isReloaded = performance.getEntriesByType("navigation")[0].type === "reload";
if (isReloaded){
    var value1 = dice1();
var value2 = dice2();

var position1 = images.indexOf(value1)
var position2 = images.indexOf(value2)
 if (position2 > position1){
    document.querySelector("h1").innerHTML=" <i class='fa-solid fa-trophy f_awesome'></i> Player 2 Wins!"
 }
 if (position1 > position2){
    document.querySelector("h1").innerHTML="Player 1 Wins! <i class='fa-solid fa-trophy f_awesome'></i>"
 }
 if(position2 === position1){
    document.querySelector("h1").innerText="Draw !!!"
    document.querySelector(".f_awesome").classList.add("invisible")
 }
}
 

 
