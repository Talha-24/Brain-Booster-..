let numberOne = document.querySelector("#number1");
let numberTwo = document.querySelector("#number2");
let score = document.querySelector("#score");
let submit = document.querySelector("#submit");
let input = document.querySelector("#input");
let count = 0;

let strengthOne = 10;
let strengthTwo = 10;
submit.addEventListener('click', function () {
    let val = input.value;
    val = val.trim();
    val = Number(val);
    let answer = document.querySelector("#number1").textContent * document.querySelector("#number2").textContent;
    
    answer = Number(answer);

    if (document.querySelector("#input").value === '') {
        alert("Input Field can not be Empty...")
    }
    else if (val == answer) {
        count++;
        score.textContent = count;
        numberOne.textContent = Math.floor(Math.random() * strengthOne);
        numberTwo.textContent = Math.floor(Math.random() * strengthTwo);
    }
    else {
        alert("Wrong Answer..");
        count = count - 1;
        score.textContent = count;
        numberOne.textContent = Math.floor(Math.random() * strengthOne);
        numberTwo.textContent = Math.floor(Math.random() * strengthTwo);
    }

})

let Increment = document.querySelector("#strengthOne");
let decrement = document.querySelector("#strengthTwo");
Increment.addEventListener("click",function(){
    strengthOne = strengthOne +2;
    strengthTwo = strengthTwo +2;
    console.log(strengthOne);
})
decrement.addEventListener("click",function(){
    strengthOne = strengthOne -2;
    strengthTwo = strengthTwo -2;
})