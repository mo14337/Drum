//playing sound using buttons

var numberOfDrums= document.querySelectorAll(".drum").length;
for(i=0;i<numberOfDrums;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);


function handleclick(){

    var buttonClicked = this.innerHTML;
    sound(buttonClicked);
    buttonAnnimation(buttonClicked);  //added annimation to buttom press

    
}
}


//palying sound using keyboard
document.addEventListener("keydown",keyClick)
function keyClick(event){

   var sound1= event.key;
   sound(sound1);
   buttonAnnimation(sound1);     //added annimation to key press
}



//Function for playing sound
function sound(key){


    switch(key){
        case"w" :
        var tom1 = new Audio("sounds/tom1.mp3");  //when "w" button/key is pressed,plays sound tom1
        tom1.play();

        break;

        case"a" :
        var tom2 = new Audio("sounds/tom2.mp3"); //when "a" button/key is pressed,plays sound tom2
        tom2.play();

        break;

        case"s" :
        var tom3 = new Audio("sounds/tom3.mp3");  //when "s" button/key is pressed,plays sound tom3
        tom3.play();

        break;

        case"d" :
        var tom4 = new Audio("sounds/tom4.mp3");  //when "d" button/key is pressed,plays sound tom4
        tom4.play();

        break;

        case"j" :
        var snare = new Audio("sounds/snare.mp3");  //when "j" button/key is pressed,plays sound snare
        snare.play();

        break;

        case"k" :
        var crash = new Audio("sounds/crash.mp3");  //when "k" button/key is pressed,plays sound crash
        crash.play();

        break;

        case"l" :
        var kick = new Audio("sounds/kick-bass.mp3");  //when "l" button/key is pressed,plays sound kick-bass
        kick.play();

        break;

        default: console.log(buttonClicked);

        
    }
}

function buttonAnnimation(currentKey){

    var activeButton=document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");}
        ,100);

}



