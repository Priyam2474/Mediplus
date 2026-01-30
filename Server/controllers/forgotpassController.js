const crypto = require('crypto');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');

const Registration = require('../models/Registration');

// Forgot Password Controller
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Registration.findOne({ useremail: email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const token = crypto.randomBytes(32).toString('hex');
    user.resetToken = token;
    user.resetTokenExpiry = Date.now() + 3600000; // 1 hour from now

    await user.save();

    const resetLink = `http://localhost:3000/reset-password/${token}`;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'priyampatel2474@gmail.com',
        pass: 'mjhy wdxc ddne udbu', // make sure App Password is correct
      },
    });

    await transporter.sendMail({
      to: user.useremail,
      subject: 'Password Reset Request',
      html: `
        <p>Hello ${user.username},</p>
        <p>You requested a password reset. Click the link below to reset it:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>This link will expire in 1 hour.</p>
      `,
    });

    res.json({ message: 'Password reset link sent to your email.' });
  } catch (err) {
    console.error('Forgot password error:', err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

// Reset Password Controller
const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await Registration.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Token is invalid or expired.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.userpassword = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    await user.save();

    res.json({ message: 'Password reset successful. You can now log in.' });
  } catch (err) {
    console.error('Reset password error:', err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

module.exports = { forgotPassword, resetPassword };
