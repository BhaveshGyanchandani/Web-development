db.items.find().limit(1) // toget the 1st doc i inserted
db.items.find().skip(1) // to skip the 1st doc i inserted
db.items.find().sort({cost: 1})//asceding sort 
db.items.find().sort({cost: -1})//desceding sort 

db.items.find().skip(1).limit(3) //use to make pagination
//pagination means lets say we have 24 entries and we put 8 entries per page, so  show me first 8 entries at first page and then skip the first 8entries and show another 8 entriess at next page and so on.


db.items.insertOne({name : "one+",cost:60000,rating:4.3})
db.items.insertOne({name : "htc",cost:450000,rating:3.3})
db.items.insertOne({name : "poco",cost:65000,rating:4.3})
db.items.insertOne({name : "redmi",cost:350000,rating:4.0})

db.items.find().skip(0).limit(3) oage entries form 1 to 3
db.items.find().skip(3).limit(8) oage entries form 4 to 8 cz we skipped 3rd entry
