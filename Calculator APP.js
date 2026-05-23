const display = document.getElementById("display")

const buttons = document.querySelectorAll("button")

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const value = button.innerText

    // CLEAR BUTTON
    if(value === "C"){
      display.value = ""
    }

    // EQUAL BUTTON
    else if(value === "="){

      try{
        display.value = eval(display.value)
      }

      catch{
        display.value = "Error"
      }

    }

    // NORMAL BUTTONS
    else{
      display.value += value
    }

  })

})