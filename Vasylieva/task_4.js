db.tracks.aggregate([
  {
    $match: {
      duration_seconds: { $lt: 60000 },
    }
  },
  {
    $sample: { size: 3 }
  },
  {
    $sort: { duration_seconds: 1 }
  },
  {
    $lookup: {
      from: "authors",
      localField: "author_id",
      foreignField: "_id",
      as: "author",
    }
  },

  {
    $project: {
      _id: 0,
      title: 1,
      duration_secs: 1,
      fullame: 1,
    }
  }
]);
