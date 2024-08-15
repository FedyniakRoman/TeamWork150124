db.tracks.aggregate([
  {
    $match: {
      duration_secs: { $lt: 60000 },
    }
  },
  {
    $sample: { size: 3 }
  },
  {
    $sort: { duration_secs: 1 }
  },
  {
    $lookup: {
      from: "users",
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
      fullname: 1,
    }
  }
]);
