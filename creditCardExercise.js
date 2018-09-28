
function removeDashes(numberarg) {

    var numberarg = "9999-9999-9999-999"
    var numberarg = numberarg.replace(/-/g,"");

}

function calculateNumberLength (numberarg) {
    if (numberarg.length != 16) {
        return false;
    } 
    return true;

    var validateCreditCard = numberarg;
    console.log(validateCreditCard);
}

removeDashes();
calculateNumberLength();


    // does not matter whether execution is before or after defining function, when defining function you need to console.log within the function so that its the step when its called. 

