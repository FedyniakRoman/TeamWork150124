// Вывести названия трех произвольных треков

db.getCollection("tracks").aggregate([
    {
        $sample: { size: 3 }
    },
])
