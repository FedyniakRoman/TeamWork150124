// Вывести названия трех произвольных треков
db.tracks.aggregate([
  {
    $sample: { size: 3 },
  },
]);
