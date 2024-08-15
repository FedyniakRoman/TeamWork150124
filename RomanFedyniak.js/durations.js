db.tracks.aggregate([
  {
    $match: {
      duration_secs: { $lt: 60000 },
    },
  },

  {
    $sort: {
      duration_secs: 1,
    },
  },

  {
    $sample: { size: 3 }
  },

  {
    $lookup: {
      from: "users",
      localField: "author_id",
      foreignField: "_id",
      as: "author",
    },
  },

  {
    $project: {
      title: 1, 
      duration_secs: 1,

    },
  },
]);
