// Задача. Вывести общее ко-во клиентов из France (предложить несколько вариантов)
db.users.aggregate([
  {
    $group: {
      _id: "$country",
      total_user: { $count: {} },
    },
  },
  {
    $match: {
      _id: "France",
    },
  },
  {
    $project: {
      _id: 0,
      country: "$_id",
      total_user: 1,
    },
  },
]);
