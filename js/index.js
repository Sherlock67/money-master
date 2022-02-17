document.getElementById('calculate').addEventListener('click',function(){
 
   const TotalIncome = getInput('total-income');
   const FoodCost = getInput('food-cost');
   const RentCost = getInput('rent-cost');
   const ClothCost = getInput('cloth-cost');
   const TotalExpense = totalExpense(FoodCost,RentCost,ClothCost);
   const afterExpense = TotalIncome - TotalExpense;
   if(TotalExpense >= 0 && TotalIncome >=0){
    setInnerText('total-expense',TotalExpense);
    setInnerText('after-expense-total',afterExpense);   
   }
   if(TotalIncome>0 && TotalExpense>=TotalIncome){
    document.getElementById('expensive-day').style.display = 'block';
   }
   
});
document.getElementById('save-button').addEventListener('click',function(){
    const afterExpenseBalance = innerTextExtractor('after-expense-total');
    const TotalIncome = getInput('total-income');
    const savePercentage = getInput('save-percentage');
    const savingAmount = findSaving(TotalIncome,savePercentage);
    if(savingAmount >= afterExpenseBalance){
        document.getElementById('not-enough-money').style.display = 'block';
    }
    setInnerText('save-amount',savingAmount);
    const remainingBalance = afterExpenseBalance - savingAmount;
    setInnerText('remain-balance',remainingBalance);
    clearAll();
});
function clearAll(){
   const allInput = document.getElementsByTagName("input");
   for(const inputs of allInput){
        inputs.value = '';
   }
}
//taking all the input fields and validating it
// if the validation is true its does nothing except -1
//else all is good ready to go
function getInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseInt(inputAmountText);
    
   if(validate(amountValue) == true){
        return -1;
   } else{
    return amountValue;
   }
   
}
// validation of input
function validate(value){
    
    if(isNaN(value)){
        document.getElementById('matched').style.display = 'block';
        document.getElementById('notmatched').style.display = 'none';
        return true;
    }
    if(value < 0){
    
      
        document.getElementById('notmatched').style.display = 'block';
        document.getElementById('matched').style.display = 'none';
        document.getElementById('expensive-day').style.display = 'none';
        document.getElementById('not-enough-money').style.display = 'none';
        return true;
    }  
}
//Setting InnerText of Html only on then if the value is greater than 0
function setInnerText(textid,value){
    if(value>= 0){
        const textValueSet = document.getElementById(textid).innerText = value;
        const textValue = parseInt(textValueSet);
        return textValue;
    }
}
//Calculating Expense
function totalExpense(food,rent,cloth){
    let TotalExpense = -1;
    if(food >= 0 && rent >= 0 && cloth >=0){
       
        TotalExpense = food + rent + cloth;
    }
    return TotalExpense;
}
//finding innertext
function innerTextExtractor(id){
    const valueText = document.getElementById(id).innerText;
    const valueWithoutText = parseInt(valueText);
    return valueWithoutText;
}
// calculating sum
function findSaving(income,percentage){
    let savingAmount ;
    savingAmount = Math.round((income * percentage)/100);
    return savingAmount;
}