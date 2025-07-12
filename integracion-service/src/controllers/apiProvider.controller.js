const apiProviderService = require('../services/apiProvider.service');

exports.createApiProvider = async (req, res) => {
  try {
    const { name, url, auth_type } = req.body;
    const newApiProvider = await apiProviderService.createApiProvider({ name, url, auth_type });
    res.status(201).json(newApiProvider);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear proveedor de API', error: error.message });
  }
};

exports.getAllApiProviders = async (req, res) => {
  try {
    const apiProviders = await apiProviderService.getAllApiProviders();
    res.status(200).json(apiProviders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener proveedores de API', error: error.message });
  }
};
