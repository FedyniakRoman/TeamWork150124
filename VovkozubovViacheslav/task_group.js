// Задача. С помощью оператор $group вывести ко-во юзеров из Germany, также их средний баланс

db.users.aggregate([
    {
        $match: {
            country: "Germany"  
        }
    },
    {
        $group: {
            _id: "$country", 
            total_users: { $sum: 1 }, 
            average_balance: { $avg: "$balance" }
        }
    }
])