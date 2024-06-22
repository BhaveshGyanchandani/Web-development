db.movies.insertOne({
    _id:100,
    name:"avatar",
    year:2023,
    rating:8.0
})

//copy and paste in mongoSH (mongo shell in mongo compass)

output should be ..
{
    acknowledged: true,
    insertedId: 100
  }