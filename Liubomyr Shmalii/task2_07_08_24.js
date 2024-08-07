db.tracks.aggregate([
  { $match: { duration_secs: { $lte: 100 * 60 } } },
  { $count: 'to 100 minutes tracks' }
])