db.tracks.aggregate([
    {  $sample: { size: 3 } }, 
    { $limit: 3 }, 
    { $project: { title: 1, _id: 0 } }
])