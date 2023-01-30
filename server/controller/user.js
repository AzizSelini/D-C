const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require('../model/user')
const validator = require('validator')

async function signup(req, res){
    
    try{

      //Get the name , email and password off req body

      const { name,email, password } = req.body;

      // Hash the password

      const hashPassword = bcrypt.hashSync(password, 10);

      // Create a user with the data

      await User.create({ name, email, password: hashPassword });

      // Respond

      res.sendStatus(200);

    }catch (err){
      
        console.log(err);
      
        res.sendStatus(400)
    }

};

async function login(req, res) {

    try {
  // Get the email and password off rq body

  const { email, password } = req.body;

  // Find the user with requested email

  const user = await User.findOne({email});
  if(!user) {
    console.log('Invalid Account!,Please Check your Email/Password');
    return res.sendStatus(401);
  }

  //compare sent in password with found user password hash

  const passwordMatch = bcrypt.compareSync(password, user.password);
  if (!passwordMatch){
    console.log('Invalid Account!,Please Check your Email/Password');
    return res.sendStatus(401);
  }

  // Create a jwt token
  const exp = Date.now() + 1000 * 60 * 60 * 24 * 30; // one month 
  const token = jwt.sign({ sub: user.name, exp }, process.env.JWT_KEY); //sub : subject and exp : Expiration Time in jwt 

  // Set the cookie

  // res.cookie("Authorization", token, {
  //   expires: new Date(exp),
  //   httpOnly: true,
  //   sameSite: "lax",
  //   secure: process.env.NODE_ENV === "production",
  // });

  // Send it

  res.json(token);

}catch(err){

    console.log(err);
    res.sendStatus(400);
}
};

function logout(req, res) {
    res.clearCookie("Authorization");
    res.sendStatus(200)
};

//checking the auth
function checkAuth(req, res){
    try{

        res.sendStatus(200)
    
    }catch(err){
        console.log(err);
        return res.sendStatus(400);
    }
    
}
function update() {
    
}
const getUserByName=async(req,res)=>{
  User.findOne({name:req.params.name},(err,result)=>{
    if (err) res.status(401).json(result)
    else res.json(result)
  })
}

module.exports = {
  getUserByName,
  signup,
  login,
  logout,
  checkAuth,
};