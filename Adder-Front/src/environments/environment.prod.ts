export const environment = {
  production: true,
  backend: {
    protocol: 'http',
    host: 'localhost',
    port: '8080',
    endpoints: {
      add:'/adder',
      current: '/adder/current',
    }
  }
};
