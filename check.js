var btn = document.getElementById('submit');
btn.addEventListener('click', createCases);
var correctCasesBox = document.getElementById('correctCasesOutput');
const operators = ["+","-","*","/"];


let data = {correctCasesMathJS: [], correctCasesMathOBJ: [], incorrectCasesMathJS: [], incorrectCasesMathOBJ: []}
function createCases(){
    correctCasesBox.value="";
    numTestCases = document.getElementById("number").value;
    
    
    //Generating 
    for (let index = 0; index < numTestCases; index++) {
        lengthOfExpression = math.randomInt(2,10);
        for (let index = 0; index < lengthOfExpression; index++) {
            randNum = math.randomInt(20);
            data.correctCasesMathJS.push(randNum);
            randOperation = math.randomInt(4);
            if (randOperation == 0) {
                data.correctCasesMathJS.push("+");
            }else if(randOperation == 1){
                data.correctCasesMathJS.push("-");
            }else if(randOperation == 2){
                data.correctCasesMathJS.push("*");
            }else if(randOperation == 3){
                data.correctCasesMathJS.push("/");
            };
            randNum = math.randomInt(20);
            data.correctCasesMathJS.push(randNum);
        }
        formulaStr = data.correctCasesMathJS.join('');
        correctCasesBox.value += formulaStr + " = " + math.evaluate(formulaStr) + '\n';
        data.correctCasesMathJS = [];
    };
}