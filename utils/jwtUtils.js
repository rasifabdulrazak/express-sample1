const jwt = require("jsonwebtoken");

console.log(process.env.ACCESS_TOKEN_SECRET)

const generateAccessToken = (email) => {
  return jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "2m",
  });
};

const generateRefreshToken = (email) => {
  return jwt.sign({ email: email }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "10m",
  });
};

const verifyAccessToken = (accessToken) => {
try {
  const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
  return {valid:true,email:decoded.email}
} catch (error) {
  return {valid:false,error:"Invalid access Token"}
}
}

const verifyRefreshToken = (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    return { valid: true, email: decoded.email };
  } catch (error) {
    return { valid: false, error: 'Invalid refresh token' };
  }
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,

};