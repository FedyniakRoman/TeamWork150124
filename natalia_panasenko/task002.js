//Задача. Вывести среднюю продолжительность по трекам 5 мин и более (вкл.)


db.tracks.aggregate([
  { $match: { duration_secs: { $gte: 100 * 50 } } },
  {
    $group: {
      _id: null,
      avg_duration: { $avg: "$duration_secs" },
    },
  },
]);
