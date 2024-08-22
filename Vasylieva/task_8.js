// Задача. С помощью оператор $group вывести ко-во юзеров из Germany, также их средний баланс
db.users.aggregate([
  { $match: { country: "Germany" } },
  {
    $group: {
      _id: null,
      avg_balance: { $avg: "$balance" },
      total_users: { $count: {} },
    },
  },
]);
