// This is to select all divs with drum class and then finding out specifically that which div is being clicked and it calls two functions - playSound and buttonAnimation
for(let i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       let innerHtmlText = this.innerHTML;
       playSound(innerHtmlText);
       buttonAnimation(innerHtmlText); 
    })
}

// when a button is pressed, we check for the entire document and take the key of the button and pass it to two fucntions - playSound and buttonAnimation
document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
})

// this fn takes the class of the div pressed and plays sound accordingly
function playSound(event){
    switch(event){
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "f":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    }
}

// fn for adding button-animation class to a button being clicked/pressed and then we remove the class using settimeout set at 100ms delay
function buttonAnimation(event){
    document.querySelector("." + event).classList.add("button-animation");
    setTimeout(function(){
        document.querySelector("." + event).classList.remove("button-animation");
    }, 100)
}

