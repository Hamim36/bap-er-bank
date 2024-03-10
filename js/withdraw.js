// step-1: add the even handler with the withdraw button
 
document.getElementById('btn-withdraw').addEventListener('click', function(){

// step-2: get the withdraw amount from the withdraw input field
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value; 
const newWithdrawAmount = parseFloat(newWithdrawAmountString);
// step-7: clear the withdraw field
withdrawField.value = '';

if(isNaN(newWithdrawAmount)){
    alert('bhai ekta thik number de onno kicu likhis na')
    return;
}

// step-3:get previous withdraw total
const  withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



// step-5:get the previous balance total 
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

if(newWithdrawAmount > previousBalanceTotal){
    alert('tur baap er bank a ato taka nai');
    return;
}

// step-4:calculate total withdraw amount
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText= currentWithdrawTotal;

// step-6:calculate new balance total 
// set the new balance total
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;

})