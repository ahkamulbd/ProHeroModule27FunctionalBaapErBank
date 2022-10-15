//console.log('Deposit File');

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