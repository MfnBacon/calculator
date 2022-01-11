
//get our buttons from the DOM
const buttons = document.querySelectorAll('.num-btn, .op-btn')
const clearButton = document.querySelector('.btn-clear')
const equalsButton = document.querySelector('.btn-equals')
const display = document.querySelector('.display')

//add an eventListener to each of the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => { 
    const buttonValue = button.getAttribute('data-num');  
    display.textContent += buttonValue
  })
})

equalsButton.addEventListener('click', () => { 
  display.textContent = eval(display.textContent)
})

clearButton.addEventListener('click', () => { 
  display.textContent = ""
})