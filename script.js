const display = document.getElementById('result');

function appendValue(value) {
    if (display.value === "Error") display.value = "";
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // eval() handles standard operators like +, -, *, /
        if (display.value) {
            display.value = eval(display.value);
        }
    } catch (err) {
        display.value = "Error";
    }
}

// Handling keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});