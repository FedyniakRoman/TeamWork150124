// Задача. Вывести среднюю продолжительность по трекам 5 мин и более (вкл.)

db.tracks.aggregate([
    {
        $match: {
            duration_secs: { $gte: 300 } 
        }
    },
    {
        $group: {
            _id: null,  
            average_duration: { $avg: "$duration_secs" } 
        }
    },
    {
        $project: {
            _id: 0,
            average_duration: 1 
        }
    }
]);