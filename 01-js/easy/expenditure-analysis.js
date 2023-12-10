/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryWisePrice = {};
  transactions.map((transaction) => {
    if (transaction.category in categoryWisePrice) {
      categoryWisePrice[transaction.category] =
        categoryWisePrice[transaction.category] + transaction.price;
    } else categoryWisePrice[transaction.category] = transaction.price;
  });
  let ans = [];
  for (let key in categoryWisePrice) {
    let obj = {};
    obj.category = key;
    obj.totalSpent = categoryWisePrice[key];
    ans.push(obj);
  }
  return ans;
}

calculateTotalSpentByCategory([
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656105600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656134400000,
    price: 30,
    category: "Food",
    itemName: "Sushi",
  },
]);

module.exports = calculateTotalSpentByCategory;
