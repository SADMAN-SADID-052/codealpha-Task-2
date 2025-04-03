function appendValue(value) {
    let display = document.getElementById('display');
    
    // Prevent multiple decimal points in a number
    if (value === '.' && display.value.slice(-1) === '.') {
        return;
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        document.getElementById('display').value = eval(expression);
    } catch (error) {
        alert('Invalid Expression');
    }
}
