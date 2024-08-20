//Задача. Вывести общее ко-во клиентов из France (предложить несколько вариантов)



db.users.aggregate([
  { 
    $match: { country: 'France' } 
  },
  { 
    $count: 'total' 
  }
])

//==================================


db.users.aggregate([
  { 
    $match: { country: 'France' } 
  },
  { 
    $group: {
      _id: null, 
      total: { $sum: {} }
    }
  }
])