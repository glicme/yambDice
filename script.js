/*
var submit = document.getElementById("submit");
submit.addEventListener('click',()=>{
    var numberOfDice = document.getElementById("diceNumber");
    generateDice(5);
})
*/
generateDice(5);
function generateDice(n){

    var diceContainer = document.getElementsByClassName("dice")[0];
    diceContainer.innerHTML="";
    
    for(var i=0;i<n;i++){
        diceContainer.innerHTML+='<div class="die" id="' + i 
        +'"><img class="dieImg" src="img/1.png"><input checked="true" type="checkbox" id="'+ i 
        + '"></div>';
    }

    var dice = document.getElementsByClassName("die");
    Array.from(dice).forEach(die => {
        die.addEventListener('click',()=>{
            var checkbox = die.querySelector('input');
            checkbox.checked=!checkbox.checked;
        })
    });
}

var roll = document.getElementById("roll");
roll.addEventListener('click',()=>{
    var dice = document.getElementsByClassName("die");
    Array.from(dice).forEach(async (die) => {
        if(!die.querySelector('input').checked)
            return;
        
        var image = die.querySelector("img");
        for(var i=0;i<10;i++){
            image.src="img/"+(i%6+1)+".png";
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        
        var randomNumber = Math.floor(Math.random()*6)+1;
        image.src="img/"+randomNumber+".png";
    });
})

var selectAll = document.getElementById("selectAll");
selectAll.addEventListener('click',()=>{
    var dice = document.getElementsByClassName("die");
    Array.from(dice).forEach(die => {
        var checkbox = die.querySelector('input');
        checkbox.checked=true;
    });
})

var deselectAll = document.getElementById("deselectAll");
deselectAll.addEventListener('click',()=>{
    var dice = document.getElementsByClassName("die");
    Array.from(dice).forEach(die => {
        var checkbox = die.querySelector('input');
        checkbox.checked=false;
    });
})