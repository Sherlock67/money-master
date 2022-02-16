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
    const saveAmountPercentageText = document.getElementById('save-percentage').value;
    const afterExpenseBalanceText = document.getElementById('after-expense-total').value;
    const savePercentage = parseInt(saveAmountPercentageText);
    console.log(savePercentage)
    
    const afterExpenseBalance = parseInt(afterExpenseBalanceText);
    console.log(afterExpenseBalance)
    let savingAmount ;
    savingAmount = (afterExpenseBalance * savePercentage)/100;
    console.log(savingAmount)
    document.getElementById('save-amount').innerText = savingAmount;


});