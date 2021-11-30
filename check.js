var btn = document.getElementById('submit');
btn.addEventListener('click', createCases);
var correctCasesBox = document.getElementById('correctCasesOutput');
var incorrectCasesBox = document.getElementById('incorrectCasesOutput');
const operators = ["+","-","*","/"];
var LIMIT = 20;

let data = {correctCasesMathJS: [], correctCasesMathOBJ: [], incorrectCasesMathJS: [], incorrectCasesMathOBJ: []}
function createCases(){
    correctCasesBox.value="";
    incorrectCasesBox.value="";
    
    numTestCases = document.getElementById("number").value;
    
    for (let index = 0; index < numTestCases; index++) {
        lengthOfExpression = math.randomInt(2,10);
        for (let index = 0; index < lengthOfExpression; index++) {
            
            //Generates starting number
            randNum = math.randomInt(1, LIMIT);
            //Choses what sign (+ or -) the first number will be. 25% chance that it will be negative
            //I chose 16% so that way not every single test case starts with or contains a negative
            randSign = math.randomInt(6);
            if (randSign == 0) {
                randNum *= -1;
                data.correctCasesMathJS.push(randNum);
                data.correctCasesMathOBJ.push(randNum);
            } else {
                //Push the positive number on to the math.js stack
                data.correctCasesMathJS.push(randNum);
                data.correctCasesMathOBJ.push(randNum);
            }
            //Picks a random operator    
            getOperation();
            
            //Used for choosing trig operation or a number to follow the chosen operator
            randOperation = math.randomInt(4);
            if (randOperation == 0) {
                getTrigonometry();
                if(index != lengthOfExpression){
                    getOperation();
                    
                }
                
            } else{
                //Generates ending number and push to mathjs stack
                randNum = math.randomInt(1, LIMIT);
                data.correctCasesMathJS.push(randNum);
                data.correctCasesMathOBJ.push(randNum);
            }        
        }


        formulaStrMathJS = data.correctCasesMathJS.join('');
        formulaStrMathOBJ = data.correctCasesMathOBJ.join('');
        console.log(formulaStrMathOBJ)
        //Output the generated test case to user
        //Add to textarea        show formula         solve the test case
        correctCasesBox.value += formulaStrMathJS + " = " + math.evaluate(formulaStrMathJS) + '\n';
        //Clear the stack
        data.correctCasesMathJS = [];
        incorrectCasesBox.value += formulaStrMathOBJ + " = " + eval(formulaStrMathOBJ) + '\n';
        data.correctCasesMathOBJ = [];
    };
}

function getOperation() {
    //Picks a random operator
    randOperation = math.randomInt(4);
    if (randOperation == 0) {
        data.correctCasesMathJS.push("+");
        data.correctCasesMathOBJ.push("+");
    }else if(randOperation == 1){
        data.correctCasesMathJS.push("-");
        data.correctCasesMathOBJ.push("-");
    }else if(randOperation == 2){
        data.correctCasesMathJS.push("*");
        data.correctCasesMathOBJ.push("*");
    }else if(randOperation == 3){
        data.correctCasesMathJS.push("/");
        data.correctCasesMathOBJ.push("/");
    }
}
function getTrigonometry(){
    randOperation = math.randomInt(9);
    if(randOperation == 0) {
        //Cosine    
        data.correctCasesMathJS.push("cos(");
        data.correctCasesMathOBJ.push("Math.cos(");
        randNum = math.randomInt(LIMIT);
        data.correctCasesMathJS.push(randNum);
        data.correctCasesMathOBJ.push(randNum);
        data.correctCasesMathJS.push(")");
        data.correctCasesMathOBJ.push(")");
    } else if(randOperation == 1) {
        //Sine
        data.correctCasesMathJS.push("sin(");
        data.correctCasesMathOBJ.push("Math.sin(");
        randNum = math.randomInt(LIMIT);
        data.correctCasesMathJS.push(randNum);
        data.correctCasesMathOBJ.push(randNum);
        data.correctCasesMathJS.push(")");
        data.correctCasesMathOBJ.push(")");
    } else if (randOperation == 2) {
        //Tangent
        data.correctCasesMathJS.push("tan(");
        data.correctCasesMathOBJ.push("Math.tan(");
        randNum = math.randomInt(LIMIT);
        data.correctCasesMathJS.push(randNum);
        data.correctCasesMathOBJ.push(randNum);
        data.correctCasesMathJS.push(")");
        data.correctCasesMathOBJ.push(")");
    } else if(randOperation == 3) {
        //Cotangent
        data.correctCasesMathJS.push("cot(");
        data.correctCasesMathOBJ.push("Math.cot(");
        randNum = math.randomInt(LIMIT);
        data.correctCasesMathJS.push(randNum);
        data.correctCasesMathOBJ.push(randNum);
        data.correctCasesMathJS.push(")");
        data.correctCasesMathOBJ.push(")");
    } else if(randOperation == 4) {
        //Arc-cosine
        data.correctCasesMathJS.push("acos(");
        data.correctCasesMathOBJ.push("Math.acos(");
        randNum = math.random(1);
        data.correctCasesMathJS.push(randNum);
        data.correctCasesMathOBJ.push(randNum);
        data.correctCasesMathJS.push(")");
        data.correctCasesMathOBJ.push(")");
    } else if (randOperation == 5) {
        //Arc-sine
        data.correctCasesMathJS.push("asin(");
        data.correctCasesMathOBJ.push("Math.asin(");
        randNum = math.random(1);
        data.correctCasesMathJS.push(randNum);
        data.correctCasesMathOBJ.push(randNum);
        data.correctCasesMathJS.push(")");
        data.correctCasesMathOBJ.push(")");
    } else if(randOperation == 6) {
        //Arc-tangent
        data.correctCasesMathJS.push("atan(");
        data.correctCasesMathOBJ.push("Math.atan(");
        randNum = math.randomInt(1,LIMIT);
        data.correctCasesMathJS.push(randNum);
        data.correctCasesMathOBJ.push(randNum);
        data.correctCasesMathJS.push(")");
        data.correctCasesMathOBJ.push(")");
    } else if(randOperation == 7) {
        //Arc-cotangent
        data.correctCasesMathJS.push("acot(");
        data.correctCasesMathOBJ.push("arcCotangent(");
        randNum = math.randomInt(LIMIT);
        data.correctCasesMathJS.push(randNum);
        data.correctCasesMathOBJ.push(randNum);
        data.correctCasesMathJS.push(")");
        data.correctCasesMathOBJ.push(")");
    } else if (randOperation == 8) {
        //Log
        data.correctCasesMathJS.push("log(");
        data.correctCasesMathOBJ.push("log(");
        randNum = math.randomInt(1,LIMIT);
        data.correctCasesMathJS.push(randNum);
        data.correctCasesMathOBJ.push(randNum);
        data.correctCasesMathJS.push(")");
        data.correctCasesMathOBJ.push(")");
    }
}
function arcCotangent(angle){
    if (angle > 1) {
        return Math.atan(1/angle);
    }else if(angle < -1){
        return Math.PI + Math.atan(1/angle);
    }else{
        return Math.PI - Math.atan(angle);
    }  
}