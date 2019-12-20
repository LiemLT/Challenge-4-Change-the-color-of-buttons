let allButtons = document.getElementsByTagName("button");
console.log(allButtons);

let originalColors = [];
for (let i = 0; i < allButtons.length; i++) {
    originalColors.push(allButtons[i].classList[1]);
}
console.log(originalColors);

let randomColors = ["btn-primary", "btn-secondary", "btn-success", "btn-danger", "btn-warning", "btn-info", "btn-light", "btn-dark"];

function colorChanger(option) {
    if (option.value === "red") {
        colorRed();
    } else if (option.value === "green") {
        colorGreen();
    } else if (option.value === "blue") {
        colorBlue();
    } else if (option.value === "reset") {
        colorReset();
    } else if (option.value === "random") {
        colorRandom();
    }
}

function colorRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-danger");
    }
}

function colorGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-success");
    }
}

function colorBlue() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-primary");
    }
}

function colorReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(originalColors[i]);
    }
}

function colorRandom() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        let j = Math.floor(Math.random() * 9);
        allButtons[i].classList.add(randomColors[j]);
    }
}