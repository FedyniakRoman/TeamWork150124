// Вывести названия трех произвольных треков

db.getCollection("tracks").aggregate([
    {
        $sample: { size: 3 }
    },
    {
        $project: { title: 1, _id: 0 }
    }
])
