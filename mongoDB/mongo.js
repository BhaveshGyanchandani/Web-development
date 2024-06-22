//inerting data in mongodb
//open shell
// enter mongod in one shell and mongosh in another shell but

//enter
//use harrykart
use harrrykart
db.items.insertOne({
    name:"samsung",cost:50000,rating:4.2})
    db.items.insertOne({
        name:"iphone",cost:50000,rating:4.2})
        db.items.insertOne({
            name:"moto",cost:50000,rating:4.2})
            db.items.insertOne({
                name:"redmi",cost:50000,rating:4.2})


//to insert multiple objectts a t once

db.items.insertMany([{name:"samsung",cost:50000,rating:4.5},{name:"iphone",cost:100000,rating:4.5}])

//if i write db.items.find()in the cmd pmpt then ALL the items with id will be shown which i have inserted
//it is not  necessary to use same data names or like cost in all coloumsn they can be more or less in each and wont have any impact on db as we are inserting the data

// use show collectoin it will show items
// to find the products of particular thing write db.item.find({rating:4.5}) to get all the object eith rating 4.5



