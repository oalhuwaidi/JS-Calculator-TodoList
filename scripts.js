var calculator = document.querySelector(".calculatorKeys")
const key = calculator.querySelector(".calculatorBody")
key.addEventListener("click", e =>{
    if (e.target.matches('div')){
        console.log("tEST")
    }
})