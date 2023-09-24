const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");
const ErrorResponse = require("../utils/errorResponse");

exports.login = async (email, password) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new ErrorResponse("Invalid credentials", 401);
  }

  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    throw new ErrorResponse("Invalid credentials", 401);
  }

  return user;
};

exports.register = async (username, email, password) => {
  const user = await User.create({
    username,
    email,
    password,
  });

  return user;
};

exports.forgotPassword = async (email) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new ErrorResponse("No email could not be sent", 404);
  }

  const resetToken = user.getResetPasswordToken();

  await user.save();

  const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

  const message = `
    <h1 style="font-size: 24px; color: #333;">Password Reset Request</h1>
    <p style="font-size: 16px; color: #666;">Hello,</p>
    <p style="font-size: 16px; color: #666;">You have requested a password reset for your TMT-SOLUTIONS account.</p>
    <p style="font-size: 16px; color: #666;">Please follow the link below to reset your password:</p>
    <a href="${resetUrl}" style="display: inline-block; background-color: #007BFF; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 5px; font-size: 16px; margin-top: 10px;">Reset Password</a>
    <p style="font-size: 16px; color: #666;">If you did not request this password reset, please ignore this email.</p>
    <p style="font-size: 16px; color: #666;">Thank you,</p>
    <p style="font-size: 16px; color: #666;">The TMT-SOLUTIONS Team</p>
`;

  try {
    await sendEmail({
      to: user.email,
      subject: "Password Reset Request",
      text: message,
    });
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    throw new ErrorResponse("Email could not be sent", 500);
  }
};

exports.resetPassword = async (resetPasswordToken, newPassword) => {
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    throw new ErrorResponse("Invalid Token", 400);
  }

  user.password = newPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  return user;
};
