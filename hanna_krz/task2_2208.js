db.tracks.aggregate([
    { $match: { duration_secs: { $gte: 5 * 60 } } },
    {
        $group: {
            _id: null,
            avg_duration: { $avg: '$duration_secs' }
        }
    }
])