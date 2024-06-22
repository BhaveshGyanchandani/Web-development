show dbs
use harrykart
show collections 
db.items.insertOne({
    name:"samsung",cost:50000,rating:4.2})
    db.items.insertOne({
        name:"iphone",cost:100000,rating:4.2})
        db.items.insertOne({
            name:"moto",cost:550000,rating:4.2})
            db.items.insertOne({
                name:"redmi",cost:30000,rating:4.2})
// agr input mein single itmes of differnt elements dalenege to searching honjayegi based on jo input hmne daala hai

// agr hm group mtlb many wala db.items dalenge aur find krenge toh hume kuch nhu milega kyuiki woh usse ek group smjhega

// jb bhi search krna ho toh data phle single or insert one ke format mein dalna

                db.items.find({raitng:4.5})

//this query will return all objects with rating of 4.5

db.items.find({rating:{$gte:3.5}})//gte means greater not greater than equal only greater
//gives all objects rating greater than 3.5
db.items.find({rating:{$gte:3.5},cost:{$gte:40000}}) this is "and" query
// not only rating more than 3.5 but also cost more than 40000 
// gte or gt

db.items.find({

    $or : [
        {rating:{$gte:5.0}},{cost:{$gt:50000}}
    ] 
    }) //this is an "or query"