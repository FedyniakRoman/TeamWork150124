// **Задача. Вывести статистику по странам юзеров, у которых баланс `100` и более**
// проекция: `страна`, `ко-во_юзеров`, `мин_баланс_юзеров`

db.users.aggregate([
  {
    $match: {
      balance: { $gte: 100 },
    },
  },
  {
    $group: {
      _id: "$country",
      user_count: { $count: {} },
      min_balance: { $min: "$balance" },
    },
  },
  {
    $project: {
      _id: 0,
      country: "$_id",
      user_count: "$user_count",
      min_balance: "$min_balance",
    },
  },
]);


// {
//     "country" : "France",
//     "user_count" : NumberInt(11),
//     "min_balance" : 1046.9241660700504
// }