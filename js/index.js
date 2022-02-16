document.getElementById('calculate').addEventListener('click',function(){
    //Taking all the values
   const TotalIncomeText = document.getElementById('total-income').value;
   const FoodCostText = document.getElementById('food-cost').value;
   const RentCostText = document.getElementById('rent-cost').value;
   const ClothCostText = document.getElementById('cloth-cost').value;
   const TotalIncome = parseInt(TotalIncomeText);
   const FoodCost = parseInt(FoodCostText);
   const RentCost = parseInt(RentCostText);
   const ClothCost = parseInt(ClothCostText);
   let TotalExpense,afterExpense;
   //calculating Expense
   TotalExpense = FoodCost + RentCost + ClothCost;
   document.getElementById('total-expense').innerText = TotalExpense;
   //calculating after expense balance
   afterExpense = TotalIncome - TotalExpense;
   document.getElementById('after-expense-total').innerText = afterExpense;

   
});
document.getElementById('save-button').addEventListener('click',function(){
    const afterExpenseBalanceText = document.getElementById('after-expense-total').innerText;
    const TotalIncomeText = document.getElementById('total-income').value;
    const saveAmountPercentageText = document.getElementById('save-percentage').value;
    const savePercentage = parseInt(saveAmountPercentageText);
    const TotalIncome = parseInt(TotalIncomeText);
    const afterExpenseBalance = parseInt(afterExpenseBalanceText);
    let savingAmount,remainingBalance ;
    savingAmount = Math.round((TotalIncome * savePercentage)/100)  ;
    document.getElementById('save-amount').innerText = savingAmount;
    remainingBalance = afterExpenseBalance - savingAmount;
    document.getElementById('remain-balance').innerText = remainingBalance;


});