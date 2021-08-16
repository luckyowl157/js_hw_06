import users from "./users.js";

// Получить общую сумму баланса (поле balance) всех пользователей.
const calculateTotalBalance = users => {
  let total = users.reduce((total, user) => {
      return total + user.balance;
  }, 0);
  return total;
};
console.log(calculateTotalBalance(users)); // 20916