const crypto = require("crypto");
const authService = require("../services/authService");
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    const user = await authService.login(email, password);

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await authService.register(username, email, password);

    sendToken(user, 200, res);
  } catch (err) {
    next(err);
  }
};

exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    await authService.forgotPassword(email);

    res.status(200).json({ success: true, data: "Email Sent" });
  } catch (err) {
    next(err);
  }
};

exports.resetPassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    await authService.resetPassword(resetPasswordToken, req.body.password);

    res.status(201).json({
      success: true,
      data: "Password Updated Success",
      token: user.getSignedJwtToken(),
    });
  } catch (err) {
    next(err);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ success: true, token });
};
