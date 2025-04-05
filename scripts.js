function appendValue(value) {
    let display = document.getElementById('display');
    

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


function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
