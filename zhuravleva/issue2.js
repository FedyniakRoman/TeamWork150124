db.getCollection("tracks").aggregate([
    {
        $match: { duration_secs: { $lte: 60 * 100 } }
    },
    { $count: 'count' }
])