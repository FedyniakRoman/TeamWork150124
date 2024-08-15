// **Задача. Вывести данные о трех случайных треках продолжительностью до `1000 мин` (не вкл.) в порядке увеличения продолжительности**

// проекция: `название_трека`, `продолжительность_трека`, `имя_автора`

db.tracks.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "author_id",
        foreignField: "_id",
        as: "user_info",
      },
    },
    {
      $match: {
        duration_secs: { $lt: 1000 * 60 },
      },
    },
    {
      $sample: { size: 3 },
    },
    {
      $sort: { duration_secs: 1 },
    },
    {
      $project: {
        _id: 0,
        title: 1,
        duration_secs: 1,
      },
    },
  ]);