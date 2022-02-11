// handle deposit button event .
document.getElementById('deposit-button').addEventListener('click', function () {
    // get deposit ammount from user
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
    // calculate main balance 
    const balanceField = document.getElementById('balance-display');
    const balanceAmountText = balanceField.innerText;
    const balanceAmount = parseFloat(balanceAmountText);
    const totalBalance = balanceAmount + depositAmount;
    balanceField.innerText = totalBalance;

})
// handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw amount from user
    const withdrawField = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    withdrawField.value = '';
    // withdraw calculate
    const withdrawDisplay = document.getElementById('withdraw-display');
    const withdrawDisplayText = withdrawDisplay.innerText;
    const withdrawAmountDisplay = parseFloat(withdrawDisplayText);
    const totalWithdrawAmount = withdrawAmountDisplay + withdrawAmount;
    withdrawDisplay.innerText = totalWithdrawAmount;
    // reduce balance for withdraw
    const balanceField = document.getElementById('balance-display');
    const balanceAmountText = balanceField.innerText;
    const balanceAmount = parseFloat(balanceAmountText);
    const totalBalance = balanceAmount - withdrawAmount;
    balanceField.innerText = totalBalance;

})
