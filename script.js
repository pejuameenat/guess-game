const randomNumber = Math.floor(Math.random()*20) + 1;
// let inputValue = Number(document.querySelector(".guess").value);
let score = 20;
let highScore = 0;
let displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

let displayBackgroundColor =function (color, inpColor){
    document.querySelector("body").style.backgroundColor = color;
    document.querySelector(".guess").style.color = inpColor;
    document.querySelector(".guess").style.color = inpColor;
} 

let divValueWidth =  function(value, width){
    document.querySelector(".number").textContent = value;
    document.querySelector(".number").style.width = width;
}

document.querySelector(".btn-input").addEventListener("click", function(){
    let inputValue = Number(document.querySelector(".guess").value);
    //when there is no input
         if(!inputValue){
            displayMessage("⚠ You need a value!!");
         } 
         //when guess is correct!
         else if(inputValue === randomNumber){
            displayMessage(" 🎉 Correct number!");
            displayBackgroundColor("green", "white");
            divValueWidth(randomNumber, "150px");
            if(score > highScore){
               highScore = score;
            document.querySelector(".high").textContent = highScore;
            }
        }
        //when the number guess is wrong
        else if (inputValue !== randomNumber){
            if(score > 1){
            displayMessage(inputValue > randomNumber ? "Too high📈": "Too low 📉");
            score--;
            document.querySelector(".score").textContent = score;
            }else{
                displayMessage("You lost the game😭") ; 
            }
        }       
    });  

    document.querySelector(".btn-head").addEventListener("click", function(){
    displayBackgroundColor("#393E46", "black");
    divValueWidth("?", "100px");
    displayMessage("Start guessing..."); 
    document.querySelector(".score").textContent = "20";
    document.querySelector(".guess").value = " ";
  });
//  document.querySelector(".btn-head").addEventListener("click", function(){
// //     window.location.reload()
// //   })