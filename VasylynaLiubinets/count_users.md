1. db.users.aggregate([
    {
        $group: {
            _id: "$country",                  
            total_users: {$count: {}  }         
        }},
    {
        $match:  { country: "France" } 
    }
])

2.db.users.aggregate([
    { $match: { country: "France" } },  
    { $count: "total_users" }           
])