const mongoose = require("mongoose");

const VerificationOTP = require("./VerificationOTP");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  citizenshipNo: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
    required: true,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },
<<<<<<< HEAD

  district: {
=======
  userAddress: {
>>>>>>> fb4befe4b13632c3bec88b669385e20bba473e9b
    type: String,
    required: true,
  },
  facialFeatures: {
    type: [String], // You can adjust the type to store face data as needed
  },
});

// Define a pre-delete hook to remove related verification data
userSchema.pre("remove", async function (next) {
  try {
    // Find and remove the associated verification data
    await VerificationOTP.deleteMany({ userId: this._id });
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
