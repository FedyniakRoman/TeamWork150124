db.tracks.aggregate([
    {
        $sample: { size: 3 }
    }
])