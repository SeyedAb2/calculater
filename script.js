function showOutput(val) {
    document.getElementById("output").value = val;
}

function operation(val) {
    document.getElementById("output").value += val;
}

function e() {
    try {
        showOutput(eval(document.getElementById("output").value))
    } catch (e) {
        showOutput('Error!')
    }
}