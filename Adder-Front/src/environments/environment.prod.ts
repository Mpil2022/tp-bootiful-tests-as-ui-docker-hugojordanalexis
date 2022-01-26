export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: 'api-adder',
    port: '8080',
    endpoints: {
      add:'/adder',
      current: '/adder/current',
    }
  }
};
