// handle deposit button event .
document.getElementById('deposit-button').addEventListener('click', function () {
    // get ammount from user
    const depositField = document.getElementById('deposit-amount');
    const depositAmountText = depositField.value;
    const depositAmount = parseFloat(depositAmountText);
    depositField.value = '';
    //get deposit
    const depositDisplay = document.getElementById('deposit-display');
    const initialDepositDisplayText = depositDisplay.innerText;
    const initialDepositDisplay = parseFloat(initialDepositDisplayText);
    const newDepostiAmount = (initialDepositDisplay + depositAmount);
    depositDisplay.innerText = newDepostiAmount;
    // calculate balance also
    const balanceField = document.getElementById('balance-display');
    const balanceAmountText = balanceField.innerText;
    const balanceAmount = parseFloat(balanceAmountText);
    const totalBalance = balanceAmount + depositAmount;
    balanceField.innerText = totalBalance;
})
