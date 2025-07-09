const authService = require('../services/auth.service');

exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const user = await authService.register({ username, email, password, role });
    res.status(201).json({ message: 'Usuario registrado correctamente', user });
  } catch (err) {
    res.status(500).json({ message: 'Error al registrar usuario', error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await authService.login(username, password);
    res.status(200).json({ token });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
