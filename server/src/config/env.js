const envConfig = {
  development: {
    dbConnectionString: 'mongodb://localhost/entrylevelwebapp-dev'
  },
  production: {
    dbConnectionString: 'mongodb://localhost/entrylevelwebapp-prod'
  }
};

const getEnvConfig = (env) => envConfig[env]

export default {
  port: process.env.PORT || 3000,
  ...getEnvConfig(process.env.NODE_ENV)
};
