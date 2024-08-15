db.tracks.aggregate([

    {
        $match: {
            duration_sec: { $lt: 60 * 1000 }
        }
    },
    {
        $sample: { size: 3 }
    },
    {
        $sort: { duration_sec: 1 }
    },
    {
        $lookup: {
            from: 'users',
            localField: 'author_id',
            foreignField: '_id',
            as: 'author'
        }
    },
    {
        $project: {
            title: 1,
            duration_sec: 1,
            'author.fullname': 1,
            _id: 0
        }
    }
])