//console.log('Deposit File');

// Function for Input Field

function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);

    inputField.value = '';

    return inputFieldValue;
}

// Function for Element Text 

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);

    return textElementValue;
}

// Function for Text Element Value

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}



document.getElementById('btn-deposit').addEventListener('click', function () {
    //console.log('Deposit Button Clicked');

    const newDepositAmount = getInputFieldValueById('deposit-field');
    //console.log(newDepositAmount);

    const previousDepositTotal = getTextElementValueById('deposit-total');
    //console.log(previousDepositTotal);

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    //console.log(newDepositTotal);

    setTextElementValueById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setTextElementValueById('balance-total', newBalanceTotal);

})