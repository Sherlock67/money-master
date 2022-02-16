document.getElementById('calculate').addEventListener('click',function(){
   const TotalIncomeText = document.getElementById('total-income').value;
    const FoodCostText = document.getElementById('food-cost').value;
   const RentCostText = document.getElementById('rent-cost').value;
   const ClothCostText = document.getElementById('cloth-cost').value;
   const TotalIncome = parseInt(TotalIncomeText);
   const FoodCost = parseInt(FoodCostText);
   const RentCost = parseInt(RentCostText);
   const ClothCost = parseInt(ClothCostText);
   let TotalExpense,afterExpense;
   TotalExpense = FoodCost + RentCost + ClothCost;
   document.getElementById('total-expense').innerText = TotalExpense;
   afterExpense = TotalIncome - TotalExpense;
   document.getElementById('after-expense-total').innerText = afterExpense;

   
});