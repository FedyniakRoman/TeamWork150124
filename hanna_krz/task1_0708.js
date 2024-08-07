db.tracks.aggregate([
    {
        $sample: { size: 3 }
    },
    {$project: {
            fullname: 1,
            _id: 0
        }}
])