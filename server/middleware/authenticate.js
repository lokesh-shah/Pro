const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const authenticate = async(req, res, next) => {
    try{

        // console.log("call started");
        // console.log(req.headers);

        // let token_call = req.headers.cookie;
        // token_call = token_call.replace('jwtoken=','');

        const token_call = req.cookies.jwtoken;
        console.log(token_call);
        // console.log(req.token);
        // console.log(process.env.SECRET_KEY);
        const verifyToken = jwt.verify(token_call, process.env.SECRET_KEY);

        const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token":token_call});

        if(!rootUser){throw new Error ("User not Found")}

        req.token =token_call;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();

    }catch (err)
    {
        res.status(401).send("Unauthorized: No token provided")
        console.log(err);
    }
}

module.exports = authenticate;