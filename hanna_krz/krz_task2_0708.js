db.tracks.aggregate([
    {
        $match: { duration_sec: { $lte: 100 * 60 } }
    },
    { $count: 'tracks_before_100_min' }
])