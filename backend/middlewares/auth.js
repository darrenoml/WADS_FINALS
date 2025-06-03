import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const token = req.cookies.accesstoken;
  if (!token) return res.status(401).json({ message: "No access token provided" });

  try {
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Token is not valid" });
  }
};

export default auth;
