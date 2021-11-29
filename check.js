var btn = document.getElementById('submit');
btn.addEventListener('click', createCases);
const outputElement = document.querySelector('.correctCases');
const resultElement = document.querySelector('.cases');

const operators = ["+","-","*","/"];

const testCases = ["Test1", "Test2", "Test3", "Test4"];

function createCases(){
    console.log(document.getElementById("number").value)

    for (let index = 0; index < testCases.length; index++) {
        outputElement.innerHTML += `<p>` + testCases[index] + `</p>`;
    }
    
}