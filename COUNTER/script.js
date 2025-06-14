let count = document.querySelector("#count");
let counter = 0
function subtract()
{
    if(counter < 0)
    {
        counter = 0;
    }
    else
    {
        counter -= 1;
        count.innerHTML = counter;
    }
}

function add()
{
    counter += 1;
    count.innerHTML = counter;
}