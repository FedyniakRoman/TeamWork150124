db.users.aggregate([
{ $sample: { size: 1 }},
   {
        $match:{is_blocked: { $ne: true } } 
    },

    {
        $project: {
             _id: 0, 
             fullname: 1,
        }
    }
])