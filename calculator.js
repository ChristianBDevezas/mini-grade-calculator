const input = document.getElementById("first-grade");
const button = document.getElementById("calculate");
const result = document.getElementById("result");

function calculate() {
    let inputValue = input.value;

    if(inputValue == "") {
        alert("Initial grade must not be empty!");
    }
    else if(inputValue <= 0) {
        alert("Initial grade must be greater than 0!");
        result.innerHTML = "";
        result.classList.remove("background");
    }
    else {
        let finalValue = inputValue * 0.625;
        result.innerHTML = Number(finalValue);
        result.classList.add("background");
    }
}

button.addEventListener("click", calculate);