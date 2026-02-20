const themeBtn = document.getElementById("themeBtn");
themeBtn.onclick = () => {
    document.body.classList.toggle("theme-active");
};
const display = document.getElementById("display");
let first = "";
let second = "";
let operator = "";
let secondMode = false;

function addNumber(num) {
    if (!secondMode) {
        first += num;
        display.textContent = first;
    } else {
        second += num;
        display.textContent = second;
    }
}

function setOperator(op) {
    if (first === "") return;
    operator = op;
    secondMode = true;
}

function calculate() {
    let a = Number(first);
    let b = Number(second);
    let res = 0;

    if (operator === "+") res = a + b;
    if (operator === "-") res = a - b;
    if (operator === "x") res = a * b;
    if (operator === "/") res = b !== 0 ? a / b : "Error";

    display.textContent = res;
    first = res.toString();
    second = "";
    operator = "";
    secondMode = false;
}

function clearAll() {
    first = "";
    second = "";
    operator = "";
    secondMode = false;
    display.textContent = "0";
}

function backspace() {
    if (!secondMode) {
        first = first.slice(0, -1);
        display.textContent = first || "0";
    } else {
        second = second.slice(0, -1);
        display.textContent = second || "0";
    }
}

["0","1","2","3","4","5","6","7","8","9"].forEach(n => {
    document.getElementById("btn"+n).onclick = () => addNumber(n);
});

document.getElementById("plus").onclick = () => setOperator("+");
document.getElementById("minus").onclick = () => setOperator("-");
document.getElementById("mul").onclick = () => setOperator("x");
document.getElementById("div").onclick = () => setOperator("/");
document.getElementById("equal").onclick = calculate;
document.getElementById("clear").onclick = clearAll;
document.getElementById("back").onclick = backspace;