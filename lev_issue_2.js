//Issue 2.
db.users.aggregate([
    {
        $match: { duration_secs: { $lte: 100 * 60 } }
    }
])