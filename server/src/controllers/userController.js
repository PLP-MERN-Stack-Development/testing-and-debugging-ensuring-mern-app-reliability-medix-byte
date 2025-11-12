const User = require('../models/User');

exports.createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    // simple stub
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ success: false, message: 'Invalid' });
    res.json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};
