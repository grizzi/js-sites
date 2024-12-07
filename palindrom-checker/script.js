const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");

function processInput(value){
  // Match all characters that are not a 
  // alphanumeric value
  const regex = /[^a-z0-9]/g // g is for everywhere in the string
  return value.toLowerCase().replace(regex, '');
}

function onClick(){
  if (!input.value){
    result.innerText = "";
    alert("Please input a value");
    return;
  }

  const cleanInput = processInput(input.value);
  console.log("Clean input is ", cleanInput)

  const originalString = cleanInput.split("");
  const reversedString = cleanInput.split("").reverse();

  console.log(originalString)
  console.log(reversedString)

  let palindrome = false;
  for (let i = 0; i < originalString.length; i++){
    palindrome = originalString[i] === reversedString[i];
    if (!palindrome){
      break
    }
  }
  if (palindrome){
    result.innerText = `${input.value} is a palindrome`;
    return;
  }
  result.innerText = `${input.value} is not a palindrome`;

}


button.addEventListener("click", onClick);
