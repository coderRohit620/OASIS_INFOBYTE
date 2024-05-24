let result = document.getElementById('result');

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    result.value += operator;
}

function clearDisplay() {
    result.value = '';
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    try {
        result.value = eval(result.value.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (error) {
        result.value = 'Error';
    }
}

function toggleSign() {
    if (result.value.startsWith('-')) {
        result.value = result.value.substring(1);
    } else {
        result.value = '-' + result.value;
    }
}
