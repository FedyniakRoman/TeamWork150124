db.users.aggregate([
  {
    $match: { is_blocked: { $ne: true } },
  },
  {
    $sample: { size: 1 },
  },
  {
    $project: { _id: 0, fullname: 1 },
  },
]);
