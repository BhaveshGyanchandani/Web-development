const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken')
const cors = require('cors');
require('./conn')
const User = require('./userSchema')

router.get('/', (req, res) => {
    res.send('Hello word from server router.js ')
})


// router.get('/:id' , (req,res)=>{
//     res.send('Hello word from server router.js '+req.params.id)
// })

//to get data from user we use .post
// whenever we call /register we can get data from user.....data we get will always be in JSON format.....but our application doesnt understand JSON format so we use stringify to convert that JSOn into string ....so we will use middleware in app.js......so we will add app.use(express.json()) , it will convert JSON in OBJECT format
//and data sendded from POSTMAN will be shown in terminal


// using Promises

// router.post('/register', (req, res) => {
//     //console.log(req.body); // gives al the data
//     // console.log(req.body.name)

//     const { name, email, work, phone, password, cpassword } = req.body // destructe data from body with their correct keys.....
//     console.log(name)

//     // for validation.....agr ek bhi field bhari nhi hai toh error dena
//     if (!name || !email || !work || !phone || !password || !cpassword) {
//         return res.status(422).json({ error: "pls fill the field " });
//     }


//     User.findOne({ email }).then((userExist) => {
    //         if (userExist) {
        //             return res.status(422).json({ error: "email already exists" });
        //         }

//         const user = new User({ name, email, work, phone, password, cpassword });

//         user.save()
//             .then(() => {
    //                 res.status(201).json({ message: "successfully stored" });
//             })
//             .catch((err) => {
//                 res.status(500).json({ error: "failed to register" });
//             });
//     }).catch((err) => {
//         console.error("Error finding user:", err);
//         res.status(500).json({ error: "Error finding user" });
//     });

//     //findOne returns promise so we can use then in it too and in save too

//     // we can use catch error if the thing before '.then' fails 

//     // it will do is .......when the user send its data .....so it wil check whether that email exists in data or not .....if it exists then it will send error that email already exist

//     // res.send("its my register page"); // sends it to POSTWMAN.....bcz POSTMAN has http://localhost:3000/register for POST method....
// });


//using Async await.....in async await there is no catch rather try and catch....where there is .then there is promise to be returned means its an async func there will be await
//async await is more better cz it shortens the Promise one......await will wait untill async executes and returns something ....if async doesnt returns true value then we can catch err
router.post('/register', async (req, res) => {
    const { name, email, work, phone, password, cpassword } = req.body
    console.log(name)

    if (!name || !email || !work || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "pls fill the field " });
    }

    try {
        const userExist = await User.findOne({ email });
        
        if (userExist) {
            return res.status(422).json({ error: "email already exists" });
        }

        const user = new User({ name, email, work, phone, password, cpassword });

        const userRegister = await user.save();


        
        
        if (userRegister) {
            res.status(201).json({ message: "successfully stored" });
        }
        else {
            res.status(500).json({ error: "failed to register" });
        }

    }
    catch (err) {
        console.log(err)
    }

});


router.post('/signin', async (req, res) => {
    // console.log(req.body);

    try {
        
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: " pls fill the data " })
        }

        const userLogin = await User.findOne({ email: email });
        // we have to use await bcz this is an async thing ........when async is executed succesfully then it will give data , so that await can get data when it is recieved .....
        //else if we dont use awaait it will give the data or error which we dont need bcz its being runed continuously bcz has fully executed but userLogin will execute anyway without waiting for async to execute fully

        const isMatch = await bcrypt.compare(password, userLogin.password) // compares entered sign in password and password of the email in the dataaset


        if (!userLogin) {
            console.log("Not found")
            res.status(400).json({ error: "user signin unsuccesful" })
        }
        else {
           const token=await userLogin.generateAuthToken();
            console.log(token)

            res.cookie("jwtoken" , token ,{
                expires: new Date(Date.now()+ 3600000 ), // expire after 1hr of creation
                httpOnly:true // expire at httpOnly
            }) //cookie(name of cookie , stored_token_variable , {expire the token in ....the 100000 is in ms})

            if (!isMatch) {
                res.status(400).json({ error: "Invalid credentials" })
            }
            else {
                res.status(200).json({ messgae: "user signin succesful" })
            }
        }

    } catch (err) {
        console.log(err + " error ")
    }
})


module.exports = router;