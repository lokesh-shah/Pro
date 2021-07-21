const express = require(`express`);

const router = express.Router();

require('../DB/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send(`Hello world router js`);
});

//////////store data in database using promises

// router.post('/register', (req, res) => {

//     const { name, email, phone, work, password, cpassword } = req.body;

//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Please fill the form" });
//     }
//     // console.log(name);
//     //res.json( { message:req.body });

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "email exist" });
//             }
        
//         const user = new User({ name, email, phone, work, password, cpassword })
//         user.save().then(()=> {
//             res.status(201).json({message: " User registered successfully "});
        
//         }).catch((err) => res.status(500).json({error: " registraction failed "}));

//     }).catch(err => {console.log(err); });

///////////////Store data in database using Async Await method

    router.post('/register', async (req, res) => {

        const { name, email, phone, work, password, cpassword } = req.body;
    
        if (!name || !email || !phone || !work || !password || !cpassword) {
            return res.status(422).json({ error: "Please fill the form" });
        }
        // console.log(name);
        //res.json( { message:req.body });
    
        try {
            
            const userExist = await User.findOne({ email: email })

            if (userExist) {
               
                return res.status(422).json({ error: "email exist" });

            }else if ( password != cpassword){
                
                return res.status(422).json({ error: "enter coorect password" });  

            }else{

                const user = new User({ name, email, phone, work, password, cpassword })

                // const userRegister = await user.save();
    
                await user.save();
        
                res.status(201).json({message: " User registered successfully "});

            }
            // if(userRegister){
            //     res.status(201).json({message: " User registered successfully "});
            // }

        } catch (err) {     
            console.log(err);
        }
       
});


//login route 

router.post('/signin', async (req, res) => {
    
    // console.log(req.body);
    // res.json({ message:"awesome"});
    try{
        const { email,password } =req.body;

        if( !email || !password){

            return res.status(400).json({error:"please filled the data"});
        }

        //how to read database data from

        const userLogin = await User.findOne({ email:email });

        if(!userLogin){
            res.status(400).json({error:"User error"});
        }else{
            res.json({message:"user signin successfully"});
        }
       

    }catch (err) {
        console.log(err);
    }

})

module.exports = router;
