// JavaScript code to save and load inputs from localStorage
window.onload = function() {
    document.getElementById('input1').value = localStorage.getItem('input1') || '';
    document.getElementById('input2').value = localStorage.getItem('input2') || '';
};

function saveInputs() {
    localStorage.setItem('input1', document.getElementById('input1').value);
    localStorage.setItem('input2', document.getElementById('input2').value);
    alert('Inputs saved!');
}

function clearInputs() {
    localStorage.removeItem('input1');
    localStorage.removeItem('input2');
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    alert('Inputs cleared!');
}
