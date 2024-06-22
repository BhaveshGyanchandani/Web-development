the mongoDB is a document type database management while SQL is a table typeon 
in SQL we have TABLES while in mongoDB we have COLLECTIONS 
monogDB runs in .json files

in this data is stored in key value pairs...key:value


show dbs ;
it will shopw all the databasess we hasNativeSymbols...AbortController.apply.call.

when we create a neew db there are 2 names 
1)db_names--> to give the name of database  it(this db_file) will be put in
2)collection names-->to give the nam of this newly created db_file

all the command execution will be done in mongosh which is at bottom of mongoDB


use db_name;
by this we can change the current database to the next data we give name of.....
or like using this database to create ot insert or change data in


we willl do CRUD operation in mongoDB whichh is Creation Record Update delete

--> Create collection

db.createCollection("songs"); //to create a collection
output will be given as {ok:1 }  which means it has been created

db_name.createCollection("movies");
{ ok :1 }


--> to insert the data into a collection we can do.....

db.db_collection_name_to_insert_data_in.insertOne({
    //key:value,
    //key:value
    _id:100,
    name:"avatar",
    year:2023,
    rating:8.0
})

for a correct data insertion output should be ..
{
    acknowledged: true,
    insertedId: 100
  }

the inserOne show only one data to be inserted i guess sourceMapsEnabled...


the collection name should be in database...


-->to insert multiple data we will use insertMany..

db.movies.insertMany([
    {
    _id:101,
    name:"RRR",
    year:2023,
    rating:7.8
    },
    {
    _id:102,
    name:"kalki",
    year:2024,
    rating:null 
    }
])

template is 

db.db_name.insertMany([{

},{

}])

always refresh mongo collection to see new data

or do
 
db.db_name.findOne({rating:8.0})//to find 1st data inserted only 1st...

{
    _id: 100,
    name: 'avatar',
    year: 2023,
    rating: 8
  }



--->now in find there is a concept of projection

it means filtering the data and then again filtering that filtered data

means we will be only get few thing we need not the full collection of that related find

for ex-->

db.movies.updateOne({},{})
db.movies.find({},{name:1,rating:1})....
it means including only name and rating of the filtered data ( 1 means including this data and 0 means not to include this data , )
data whose name isnt written is not included and _id is default as 1 but we can give 0 to it too

the first {} means take all the data .....then ", {name:1,rating:1}" means filter that filtered data by givig name rating and id (default)


{
  _id: 100,
  name: 'avatar',
  rating: 8
}
{
    _id: 101,
    name: 'RRR',
    rating: 7.8
  }
  {
    _id: 102,
    name: 'kalki',
    rating: null
  }

  here id is by deault shown .....but we can change it to not include by dooing id:0




  --> to update any daata in a collection we can do 

  updateOne do updation of 1 , updateMany will do for many
  db.movies.updateOne({
    name:"avatar"
  },
 {
    $set:{rating:9.0}
 }
)

select the data whose name is avatar and set its rating to 9.0

output-->
{
    acknowledged: true, //accepted the operartion
    insertedId: null, // not inserted bcz id wasnt matched bxcz here we didnt gave 
    matchedCount: 1,//number of data matched with operatoin i.e 1
    modifiedCount: 1,//no. of data where it is modiefied to 
    upsertedCount: 0 //no. of error occured i.e 0 here
  }

  (but first check wheteher that data exist or not bby using "find" )


($set is a set operator in mongoDB)


--> there are many operators in mongoDB

db.movies.updateMany({},{
    $inc:{rating:1}
})


increasing the rating to +1

but here it will show error bcz year is float and we are incrementign in integer instead we can do as

-->
db.movies.updateMany({},{
    $inc:{year:1}
})

{
    acknowledged: true,
    insertedId: null,
    matchedCount: 3,
    modifiedCount: 3,
    upsertedCount: 0
  }

  db.movies.findOne({year:2024})

  {
    _id: 100,
    name: 'avatar',
    year: 2024,
    rating: 11
  }


  --> to delete the data 

  db.collection_name.deleteMany({})

  db.movies.deleteMany({rating:11.0})

  {
    acknowledged: true,
    deletedCount: 1
  }


  --> also use the mongoDB's website /docs/manual.reference/method/  to check various thing like this
  https://www.mongodb.com/docs/atlas/getting-started/ 

  