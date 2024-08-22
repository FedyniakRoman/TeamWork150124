db.users.aggregate([
    { $match: { country: 'Germany' } },
    {
        $group: {
            _id: null,
            total: { $count: {} },
            avg_balance: { $avg: "$balance" }
        }
    }
])