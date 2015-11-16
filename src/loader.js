importScripts(
  'lib/es6-shim.min.js',
  'lib/system.js'
);

System.config({
  baseURL: '/',
  defaultJSExtensions: true,
  map: {
    'immutable': 'lib/immutable.min.js',
    'socket.io-client': 'lib/socket.io.js'
  },
  warnings: true
});

importScripts(
  'lib/worker.dev.js'
);

System.import('worker')
  .catch(error => {
    console.error('ERROR @ loader :', error);
  });
