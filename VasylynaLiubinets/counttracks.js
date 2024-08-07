//Вывести ко-во треков с продолжительностью до 100 мин (вкл.)

db.tracks.aggregate([
    { $match: { duration_secs: { $lte: 100 * 60 } } },
    { $count: 'total' }
])