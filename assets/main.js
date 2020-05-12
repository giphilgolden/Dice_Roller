let rollButton = document.querySelector("#roll-button")
let rollNumberInput = document.querySelector("#roll-number")
let rollSumTotal = document.querySelector("#roll-sum")
let dieRolls = []

rollButton.addEventListener("click", function(){
    console.log("click")
    
    let numberOfRolls = rollNumberInput.value
    console.log(numberOfRolls)

    if (Math.random() * 6 < 1) {
        console.log("6")
    } else if (Math.random() * 5 < 1) {
        console.log("5")
    } else if (Math.random() * 4 < 1) {
        console.log("4")
    } else if (Math.random() * 3 < 1) {
        console.log("3")
    } else if (Math.random() * 2 < 1) {
        console.log("2")
    } else {
        console.log("1")
    } 

})