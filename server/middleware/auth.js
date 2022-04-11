import { User } from "../models/User.js";

export const auth = (req, res, next) => {
  const token = req.cookies.x_auth;

  User.findByToken(token, (err, user) => {
    if (err || !user) return res.json({ isAuth: false, error: true });
    req.token = token;
    req.user = user;
    next();
  });
};
