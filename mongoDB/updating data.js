use harrykart
show dbs
show collections
db.items.insertOne({
    name: "samsung", cost: 50000, rating: 4.2
})
db.items.insertOne({
    name: "iphone", cost: 100000, rating: 4.2
})
db.items.insertOne({
    name: "moto", cost: 50000, rating: 4.2
})
db.items.insertOne({
    name: "redmi", cost: 30000, rating: 4.2
})

we can crete a new collection in harrykart by writing 
db.(collectiion name).insertOne({a:22 or anything})

we can create an another db recordinig doc by writing 
use newdb or any new db name 
the we can paste the same insertoen with name of droid in place of items and can add it in newdb menu and 
in show collections we can see droid

for switching of db we can write same as always
use harrykart or use (your db name)
we can add something in anothercollection(new collection we created ) in harrykart by writing
db.anothercollection.inertone({ snythiing})

to update data  in the collection write
db.(collection name).updateOne({data we have or data we have a name like name:"samsung"},{$set:{the argument we wnat to update to}})

for ex 
db.items.updateOne({name:"samsung"},{$set:{cost:2}})
it will update the cost of samsung named data to cost 2

for mutliple udating of data
db.items.updateMany({name:"samsung"},{$set:{cost:2 , rating:2}})
