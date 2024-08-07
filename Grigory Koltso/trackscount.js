db.tracks.aggregate([
    { $match: { duration_secs: { $lte: 100 * 60 } } },
    { $count: 'total' }
])
