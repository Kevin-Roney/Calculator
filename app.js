const addInput1El = document.getElementById('add-input-1');
const addInput2El = document.getElementById('add-input-2');
const addResultEl = document.getElementById('add-result');
const addButtonEl = document.getElementById('add-button');

addButtonEl.addEventListener('click', () => {
    const firstValue = addInput1El.valueAsNumber;
    const secondValue = addInput2El.valueAsNumber;
    const sum = firstValue + secondValue;
    addResultEl.textContent = sum;
});

const subtractInput1El = document.getElementById('subtract-input-1');
const subtractInput2El = document.getElementById('subtract-input-2');
const subtractResultEl = document.getElementById('subtract-result');
const subtractButtonEl = document.getElementById('subtract-button');

subtractButtonEl.addEventListener('click', () => {
    const firstValue = subtractInput1El.valueAsNumber;
    const secondValue = subtractInput2El.valueAsNumber;
    const subanswer = firstValue - secondValue;
    subtractResultEl.textContent = subanswer;
});

const multiplyInput1El = document.getElementById('multiply-input-1');
const multiplyInput2El = document.getElementById('multiply-input-2');
const multiplyResultEl = document.getElementById('multiply-result');
const multiplyButtonEl = document.getElementById('multiply-button');

multiplyButtonEl.addEventListener('click', () => {
    const firstValue = multiplyInput1El.valueAsNumber;
    const secondValue = multiplyInput2El.valueAsNumber;
    const multanswer = firstValue * secondValue;
    multiplyResultEl.textContent = multanswer;
});

const divideInput1El = document.getElementById('divide-input-1');
const divideInput2El = document.getElementById('divide-input-2');
const divideResultEl = document.getElementById('divide-result');
const divideButtonEl = document.getElementById('divide-button');

divideButtonEl.addEventListener('click', () => {
    const firstValue = divideInput1El.valueAsNumber;
    const secondValue = divideInput2El.valueAsNumber;
    const divideanswer = firstValue / secondValue;
    divideResultEl.textContent = divideanswer;
});