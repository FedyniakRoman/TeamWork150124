// Напишите запрос в рамках БД audiohosting_150124
// Вывести ко-во треков с продолжительностью до 100 мин (вкл.), используя метод aggregate()



db.tracks.aggregate([
  { $match: { duration_secs: { $lte: 100 * 60 } } },
  { $count: 'tracks_under_100min' }
])