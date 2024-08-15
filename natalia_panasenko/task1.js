//Задача. Вывести данные о трех случайных треках продолжительностью до `1000 мин` (не вкл.) в порядке увеличения продолжительности

//проекция: `название_трека`, `продолжительность_трека`, `имя_автора`


db.tracks.aggregate([
  { $match: { duration_secs: { $lte: 1000 * 60 } }},
  { $sample: { size: 3 }},
  { $sort: { duration_secs: 1 } }, 
       {
      $lookup: {
          from: 'users', 
          localField: 'author_id', 
          foreignField: '_id', 
          as: 'author' 
      }
  },
  { $project: { title: 1, duration_secs: 1, author: 1, _id: 0 } } 
])