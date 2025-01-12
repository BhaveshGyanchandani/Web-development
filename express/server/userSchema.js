const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
// userSchema is an instance which uses method
const userSchema = new mongoose.Schema({
    name: {
        type: String, // datatype
        required: true // required 
    },

    email: {
        type: String, // datatype
        required: true // required 
    },

    work: {
        type: String, // datatype
        required: true // required 
    },

    phone: {
        type: Number, // datatype
        required: true // required 
    },

    password: {
        type: String, // datatype
        required: true // required 
    },

    cpassword: {
        type: String, // datatype
        required: true // required 
    },
    tokens: [
        {
            token: {
                type: String, // datatype
                required: true // required 

            }
        }
    ]

})


// to encrypt password and cpasswaord
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next();
})

/// we are generating token

userSchema.methods.generateAuthToken = async function () {
    try {
        // let tokenGen = jwt.sign({ _id: this._id }, process.env.SECTRET_KEY)
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        //SECTRET_KEY should be atleat 32 words long
        // jwt.sign(payload, secretOrPrivateKey ,[optiobs ,calllback])  payload should have to be unique .....so we will use _id bcz _id is unique

        // this.tokens = this.tokens.concat({token:tokenGen}) // tokens mein joh token field has usmein tokenGen ko daaal dena....pr apn token : token hi likhenge.....
        this.tokens = this.tokens.concat({token:token})

        await this.save();
        return token;

    } catch (err) {
        console.log(err);
    }
}

const User = mongoose.model('USER', userSchema)
// .modal(collection_name,schema) schema that it will contain in PRACTICAL collection_name
// we need to give the collection name in captial letter so it wil convert it into lower case then pluralise it....USER to users ....if users collection doesnt exist then it will create one.....
// if u createdd a collection then it should  be in small case letter and plural...ex- shoppings,collections...not shopping or collection....

module.exports = User;
