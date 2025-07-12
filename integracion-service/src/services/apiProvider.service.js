const { APIProvider } = require('../models');

exports.createApiProvider = async ({ name, url, auth_type }) => {
  const newApiProvider = await APIProvider.create({
    name,
    url,
    auth_type,
  });

  return newApiProvider;
};

exports.getAllApiProviders = async () => {
  return APIProvider.findAll();
};
