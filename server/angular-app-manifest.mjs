
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/giolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/giolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1291, hash: 'd49ad7dc87754dbb014156272abe9d8c66f9aaada4403ea9da331cbc2db7d0b0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: '7702c4bc8a549686dee22541b92fc37ba5363fc13cc7239a922a5a2232ff627c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25933, hash: 'f311c532eb66fabee612b7b77eced4831b45d791fac31ca0c74c448450b51292', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QBFKMMZL.css': {size: 2010, hash: 'udV8tLGc2HY', text: () => import('./assets-chunks/styles-QBFKMMZL_css.mjs').then(m => m.default)}
  },
};
