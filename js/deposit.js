

document.getElementById('btn-deposit').addEventListener('click',function(){
    
    /*
    1.get the element by id
    2.get the value from the element
    3.convert string value to a number

    */
   const newDepositeAmount = getInputFieldValueById('deposit-field');

/**
 * 1.get previous deposit total by id
 * 
 */
const previoiusDepositTotal =  getTextElementValueById('deposit-total');

// calculate new deposit total
const newDeposittotal = previoiusDepositTotal + newDepositeAmount;

// set deposit total value

setTextElementValueById('deposit-total', newDeposittotal);

// get previoius balance by using the function
const previoiusBalanceTotal =getTextElementValueById('balance-total')
 
const newBalanceTotal = previoiusBalanceTotal + newDepositeAmount;
setTextElementValueById('balance-total', newBalanceTotal)
})