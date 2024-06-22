const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/harrykart', {useNewUrlParser: true,useUnifiedTopology:true});//teling that we want ot use harrykart database

var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));

db.once('open',function(){
    console.log("we are connected");
    console.log("http://127.0.0.1:27017/");

});
const kittySchema = new mongoose.Schema({
    name: String
  });
  const Kitten = mongoose.model('Kitten', kittySchema);
  const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); 