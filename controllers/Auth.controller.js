const UserModel = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {generateAccessToken,generateRefreshToken,verifyRefreshToken} = require("../utils/jwtUtils")

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).send({
          message: "Email and password are required",
        });
      }
  
      const user = await UserModel.findOne({ email });
      console.log(user, "=========");
      
      if (!user) {
        return res.status(401).send({
          message: "User with email does not exist",
          status_code: 401
        });
      }
  
      const isPasswordTrue = user.password && await bcrypt.compare(password, user.password);
      
      if (!isPasswordTrue) {
        return res.status(401).send({
          message: "Invalid email and password",
        });
      }

      const accessToken = generateAccessToken(email);
      const refreshToken = generateRefreshToken(email);
  
      res.send({
        message: "Login success",
        data: {
          "id":user._id,
          "first_name":user.firstName,
          "last_name":user.lastName,
          "email":user.email,
          "phonenumber":user.phone,
          "token":{
            "access_token":accessToken,
            "refresh_token":refreshToken
          }
        },
      });
    } catch (error) {
      return res.status(500).send({
        message: "Internal server error",
        error: error.message,
      });
    }
  };


exports.refresh = async (req,res)=>{
  try {
    const {refreshToken} = req.body
    if (!refreshToken){
      return res.status(400).send({
        message:"refresh token is required"
      })
    }
    const {valid,email,error} = verifyRefreshToken(refreshToken);
    if (!valid){
      return res.status(401).send({
        message:'Invalid token',
        error:error
      })
    }
    const newAccessToken = generateAccessToken(email)
    return res.status(200).send({
      message:'Access token generated succusefully',
      access_token:newAccessToken
    })
    
  } catch (error) {
    return res.status(500).send({
      message:"Internal server error",
      error:error.message
    })
  }

    
}