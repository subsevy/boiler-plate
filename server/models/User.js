import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: { type: String, maxlength: 50 },
  email: { type: String, trim: true, unique: 1 },
  password: { type: String, minlength: 5 },
  lastname: { type: String, maxlength: 50 },
  role: { type: Number, default: 0 },
  image: String,
  token: { type: String },
  tokenExp: { type: Number },
});

userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) next(err);

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) return callback(err);

    callback(null, isMatch);
  });
};

userSchema.methods.generateToken = function (callback) {
  const user = this;

  const token = jwt.sign(user._id.toHexString(), "secret-token");

  user.token = token;
  user.save((err, user) => {
    if (err) return callback(err);

    callback(null, user);
  });
};

userSchema.statics.findByToken = function (token, callback) {
  jwt.verify(token, "secret-token", function (err, decoded) {
    if (err) return callback(err);

    User.findOne({ _id: decoded, token }, (err, user) => {
      if (err) return callback(err);
      return callback(null, user);
    });
  });
};

export const User = mongoose.model("User", userSchema);
