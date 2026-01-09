
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/giolio/browser/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/giolio/browser"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1441, hash: '0d214bfcfce01393862b18da238519bb99fe80c14b67f23819acef8cd234c756', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: 'cd37087f6505f7c3cf1fe1b7d787c273265c686690bbef9027a50981d757cc97', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28101, hash: '2ade3e8a233c73fa27a0a0b357dca9fa31df38052d0a93ffba3f70699c7f9640', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6UODEDGU.css': {size: 2106, hash: 'VjEYY5mbeLc', text: () => import('./assets-chunks/styles-6UODEDGU_css.mjs').then(m => m.default)}
  },
};
