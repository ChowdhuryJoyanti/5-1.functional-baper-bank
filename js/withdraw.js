/**
 * 1.add withdraw button event handler
 * 2.get withdraw amount by using getInputFieldById function
 * 3.get previous withdraw amount by using getTextElementValueById
 * 4.calculate new withdraw total and set the vlaue
 * 4.5:set new withdraw total by using setTextelementvalueBy function 
 * 5.get previous balance total by using  getTextElementValueById function
 * 6.calculate new balance total
 * 7.set balance  total using setTextElementValueById
 */


document.getElementById('btn-withdraw').addEventListener('click',function(){
  
const newWithdrawAmount = getInputFieldValueById('withdraw-field');
const previoiusWithdrawTotal = getTextElementValueById('withdraw-total');
const newWithdrawTotal = previoiusWithdrawTotal + newWithdrawAmount;
setTextElementValueById('withdraw-total',newWithdrawTotal);
const previoiusBalanceTotal = getTextElementValueById('balance-total');
const newBalanceTotal = previoiusBalanceTotal - newWithdrawAmount;
setTextElementValueById('balance-total', newBalanceTotal);
// console.log(newWithdrawAmount);

})