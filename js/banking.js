//use function to reduce codes and clean code

//Deposit and withdraw update using one function 'getInputvalue'
function getCurrentvalue(id){
    
    const currentAmountText=document.getElementById(id)
    const currentAmount=parseFloat(currentAmountText.value)
   
    //step-3:clear the 'Deposit Amount' input field
    currentAmountText.value=''

    return currentAmount
}
//setting total->previous+current to Deposited Amount and Withdrawn Amount
function settingTotal(Total_id,currentAmount){
    const previousAmountText=document.getElementById(Total_id)
    // console.log(previousAmountText.innerText)
    const previousAmount= parseFloat(previousAmountText.innerText)
    const totalAmount=previousAmount+currentAmount
    previousAmountText.innerText=totalAmount //previous+current->total set hobey 'Deposited Amount' field a
}

function getPreviousUserBalance(User_balance_id){
        const previousBalanceText=document.getElementById(User_balance_id)
        // console.log(previousBalance.innerText)
        const previousBalance=parseFloat(previousBalanceText.innerText)
        return previousBalance
}

function updateBalance(User_balance_id,currentAmount,isAdd){
    if(isAdd==true){
        const previousBalanceText=document.getElementById(User_balance_id) //mendatory to set Balance field
        let previousBalance=getPreviousUserBalance(User_balance_id)
        const newBalance=previousBalance+currentAmount;
        // console.log(newBalance)
        previousBalanceText.innerText=newBalance
    }
    else{
        const previousBalanceText=document.getElementById(User_balance_id)
        // console.log(previousBalance.innerText)
        const previousBalance=getPreviousUserBalance(User_balance_id)
        // console.log(previousBalance)
        
        const newBalance=previousBalance-currentAmount;
        // console.log(newBalance)
        previousBalanceText.innerText=newBalance
        
        
        
    }
}



//Deposit button("deposit-btn") event handle
document.getElementById('deposit-btn').addEventListener('click',function(){
    // console.log('deposit btn clicked')

    //step-1:update deposit amount 
    //getCurrentvalue() function called with parameter 'deposit-amount' to get the current deposit amount
    const currentDepositAmount= getCurrentvalue('deposit-amount')
    if(currentDepositAmount>0 ){
          //set Total deposit to 'Deposited Amount'
        settingTotal('deposit-total',currentDepositAmount)

        //step-2:Update 'Balance' due to deposited money
        updateBalance('user-balance',currentDepositAmount,true)      //'true'->add ,false->sub
    }
    else{
        alert("sorry put valid input")
    }
      
})

////withdraw button("withdraw-btn") event handle
document.getElementById('withdraw-btn').addEventListener('click',function(){
    ////step-1:update withdrawn amount 
    //getCurrentvalue() function called with parameter 'withdraw-amount' to get the current withdraw amount
    const currentWithdrawAmount=getCurrentvalue('withdraw-amount')

    const previousBalance=getPreviousUserBalance('user-balance')
    // console.log(previousBalance)
    if(currentWithdrawAmount>0 && currentWithdrawAmount<previousBalance){  //validation done(NaN and negetive number problem has been handle using this validation)
        //set Total withdraw to 'Withdrawn Amount'
        settingTotal('withdrawn-total',currentWithdrawAmount)

        //step-2:Update 'Balance' due to withdraw money
        updateBalance('user-balance',currentWithdrawAmount,false)
    }
    else{
        alert("sorry put valid input")
    }
      
 

})




