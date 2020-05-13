let rollButton = document.querySelector("#roll-button")
let rollNumberInput = document.querySelector("#roll-number")
let rollSumTotal = document.querySelector("#roll-sum")
let dieRolls = []
let rollResults = document.querySelector("#roll-results")
let rollShow = document.querySelector("#roll-show")

rollButton.addEventListener("click", function(){
    
    let numberOfRolls = rollNumberInput.value
    console.log("number of rolls is" + " " + numberOfRolls)

    let index = 1

    while (numberOfRolls >= index ) {
        if (Math.random() * 6 < 1) {
        console.log("6")
        dieRolls.push("6")
    } else if (Math.random() * 5 < 1) {
        console.log("5")
        dieRolls.push("5")
    } else if (Math.random() * 4 < 1) {
        console.log("4")
        dieRolls.push("4")
    } else if (Math.random() * 3 < 1) {
        console.log("3")
        dieRolls.push("3")
    } else if (Math.random() * 2 < 1) {
        console.log("2")
        dieRolls.push("2")
    } else {
        console.log("1")
        dieRolls.push("1")
        
    }  
     index += 1
    }
    console.log(dieRolls)
    console.log("dieRolls length is" + " " + dieRolls.length)

    let i = 0
    while (dieRolls.length > i) {
        
        rollResults.innerHTML += ("<li>" + " " + dieRolls[i] + " " + "</li>")
        let baseRollValue = 0
        let newRollValue = baseRollValue += dieRolls[1]
        let newestRollValue = (newRollValue += dieRolls[i])
        rollSumTotal.innerHTML = (newRollValue)
        console.log("newRollValue is " + newRollValue)
        console.log(newestRollValue)
        i += 1
        console.log("i = " +i)
        baseRollValue += dieRolls[i]
    }


})

rollShow.addEventListener("click", function() {
    if (rollResults.style.display === "inline-block") {
        rollResults.style.display = "none";
      } else {
        rollResults.style.display = "inline-block";
      }
})