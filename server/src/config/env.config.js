const envConfig = {
  development: {
    dbConnectionString: 'mongodb://localhost/entrylevelwebapp-dev',
    jwtSecret: 'entrylevelwebappsecret-dev'
  },
  production: {
    dbConnectionString: 'mongodb://localhost/entrylevelwebapp-prod',
    jwtSecret: 'entrylevelwebappsecret-prod'
  }
};

const getEnvConfig = (env) => envConfig[env];

export default {
  port: process.env.PORT || 3030,
  ...getEnvConfig(process.env.NODE_ENV)
};
