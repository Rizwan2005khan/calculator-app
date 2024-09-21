let inputContainer =  document.getElementById("input-container")
let buttonContainer =  document.querySelectorAll("button")
let inputValue = "";

buttonContainer.forEach(button => {
    button.addEventListener('click', handleClick);
  });


function handleClick(e) {
    let buttonText = e.target.innerText;
    
    if (buttonText == "*") {
      inputValue += buttonText;
      inputContainer.value = inputValue;
    } 
    else if (buttonText == "DEL") {
        inputValue = inputValue.slice(0, -1);
      inputContainer.value = inputValue;
    }
    else if (buttonText == "AC") {
        inputValue = "";
      inputContainer.value = inputValue;
    }
    else if (buttonText == "=") {
        try {
            inputContainer.value = eval(inputValue);
            inputValue = inputContainer.value;
          } catch (error) {
           inputContainer.value = "Error";
            inputValue = "";
          }
    } else {
      inputValue += buttonText;
      inputContainer.value = inputValue;
    }
  }
  
