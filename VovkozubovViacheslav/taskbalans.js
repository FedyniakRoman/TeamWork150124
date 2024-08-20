// Задача. Вывести статистику по странам юзеров, у которых баланс `100` и более**

// проекция: `страна`, `ко-во_юзеров`, `мин_баланс_юзеров`
db.users.aggregate([
    { $match: { balance: { $gte: 100 } } },
    {
        $group: {
            _id: '$country',
            total: { $count: {} },
            min_balance: { $min: '$balance' }
        }
    },
    {
        $project: {
            _id: 0,
            total: 1,
            min_balance: 1,
            country: '$_id'
        }
    }
])