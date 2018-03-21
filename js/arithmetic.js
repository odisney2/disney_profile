
/* 
    Will randomly pick Arithmetic to use for the math problems
 */
function returnArithmetic () {

    /* Will pick a number betwen 1 and 4 and depending on the number, will use that Arithmetic.   Put else statement in there in case updates and/or really an error */
    var arithmetic = Math.floor(Math.random() * 4 + 1);

    if (parseInt(arithmetic) === 1) {
        return('+');
    } 
    else if (parseInt(arithmetic) === 2) {
        return('-');
    }
    else if (parseInt(arithmetic) === 3) {
        return('*');
    }
    else if (parseInt(arithmetic) === 4) {
        return('/');
    }
    else {
        return('ERROR - got ' + arithmetic);
    }
}

// ******************** Return Problem *************************

// function returnProblem (digits) {

//     var isThisNumberValid = Number.isInteger(parseInt(digits));

//     var firstNumber = 0;
//     var secondNumber = 0;
//     var arithmetic_used = returnArithmetic() ;

//     var theAnswer = 0;

//     if(isThisNumberValid){
//         if (parseInt(digits) > 0 && parseInt(digits) < 5) {

//             firstNumber = returnDigit(digits);
//             secondNumber = returnDigit(digits);
//             theAnswer = eval(firstNumber + arithmetic_used + secondNumber);
//             answer1.value = theAnswer;
//             return ("this is a valid integer and will use " + firstNumber + " " + arithmetic_used + " " + secondNumber + " = " + theAnswer);
//         }
//         else {
//             return("this number must be above 0 and below 5");
//         }
//     }
//     else
//     {
//         return("this variable not an integer");
//     }
//     // return Math.floor(Math.random() * (max - min) + min)
//     // return Math.random() * (max - min) + min

// }

// ******************** Return Digit *************************

function returnDigit(digits) {

    var beginInteger = '1';
    var endInteger = '9';

    for (var i= 1; i<= digits-1; i+=1) {
        beginInteger += '0';
        endInteger += '9';
    }

    return Math.floor(Math.random() * (parseInt(endInteger) - parseInt(beginInteger)) + parseInt(beginInteger));
}


const digitButton = document.getElementById("num_of_digits_button");


digitButton.addEventListener('click', () => {
    
        const numDigits = document.getElementById("num_of_digits");
        const p1 = document.getElementsByClassName("problem1")[0];
        
        const a1 = document.getElementsByClassName("answer1")[0];
        const u1 = document.getElementsByClassName("userAnswer1")[0];
        
        const c1 = document.getElementsByClassName("correct1")[0];

        let firstNum = 0;
        let secondNum = 0;
        let arithmetic = "";   /* will randomly pick arithmetic to use --   1 = +,   2 = -,   3 = * ,   4 = /   */
        let rightAnswer = 0;

        var digits = parseInt(num_of_digits.value);


        /* will check the digits first to make sure it is an integer and it is between 1 and 4 */
        
        var isThisNumberValid = Number.isInteger(parseInt(numDigits.value));

        if(isThisNumberValid){
             if (parseInt(digits) >= 1 && parseInt(digits) <= 4) {

                
                 firstNum = returnDigit(digits);
                 secondNum = returnDigit(digits);
                 arithmetic = returnArithmetic();

                 rightAnswer = eval(firstNum + arithmetic + secondNum);
                
                 p1.textContent = " " + firstNum + " " + arithmetic + " " + secondNum + " = ";
                 a1.value = rightAnswer;
                 u1.value = "this value is good";

             }
             else {
                  u1.value = "this number must be above 0 and below 5";
             }
        }
        else
        {
             u1.value = "this variable not an integer";
        }

    })



            //p1.textContent = returnProblem(numDigits.value);



// p1.style.backgroundColor = "yellow";