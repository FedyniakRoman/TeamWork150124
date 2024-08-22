db.users.aggregate([
    {
        $match: { is_blocked: { $ne: true } }  
    },
    {
        $sample: { size: 1 }  
    },
    {
        $project: { fullname: 1, _id: 0 }  
    }
])