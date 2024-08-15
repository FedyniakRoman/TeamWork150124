db.tracks.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "author_id",
      foreignField: "_id",
      as: "author",
    },
  },
  { $match: { duration_secs: { $lt: 1000 * 60 } } },
  { $sample: { size: 3 } },
  { $sort: { duration_secs: 1 } },

  { $project: { title: 1, duration_secs: 1, "author.name": 1, _id: 0 } },
]);
