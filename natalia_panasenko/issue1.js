// Напишите запрос в рамках БД audiohosting_150124
// Вывести названия трех произвольных треков


db.tracks.aggregate([
  {
      $sample: { size: 3 }
  },
  { $project: { title: 1, _id: 0 } }

])


