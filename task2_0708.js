// Вывести ко-во треков с продолжительностью до 100 мин (вкл.)

db.tracks.aggregate([
  { $match: { duration: { $lte: 100 * 60 } } },
  { $count: "total" },
]);
