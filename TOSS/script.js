let result = document.querySelector("#result");

function toss(choice){
    
    let num = Math.ceil(Math.random()*2)
    if(num === 1 && choice == "head" || num === 2 && choice == "tail")
    {
        // console.log("You Won the Toss");   
        result.innerHTML = "You Won the Toss";
    }
    else{
        // console.log("You Lose the Toss");
        result.innerHTML = "You Lose the Toss";
    }
}