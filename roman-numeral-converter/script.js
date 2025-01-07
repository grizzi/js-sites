inputNumber = document.getElementById("input")
convertButton = document.getElementById("convert-button")
resultParagraph = document.getElementById("result-paragraph")


const convertNumberToRoman = () => {
    parseNumber(inputNumber.value);
    resultParagraph.textContent = "Conversion result";
}

const parseNumber = (valueString) => {
    console.log("Converting", valueString);
    const result = parseInt(valueString);
    console.log(result);
    if (isNaN(result) || result < 0){
        alert("Input should be a valid positive integer");
        return;
    } 
    if (result >= 4000){
        alert("Must input an integer < 4000");
        return;
    }
}

convertButton.addEventListener("click", convertNumberToRoman);
