const authService = require('../services/auth.service');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await authService.login(username, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
  }
};

exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const newUser = await authService.register({ username, email, password, role });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
  }
};