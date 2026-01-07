
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
    'index.csr.html': {size: 1217, hash: 'ffa314df47fed79044ef3cbc1c85a86eade11e9b93370023614854ea33f964e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 959, hash: 'a18a70f16a0e6b45ee7a58bb8a2f9995ed1414817a6b7f47ee7c22cdf39cbfe4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17775, hash: '0007eb8c2f18b21a01e74c0cca2d1c49816f667739fadfcc3e89feedb59bbb44', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CJN2GPDR.css': {size: 1367, hash: 'LXK6nvrtXPU', text: () => import('./assets-chunks/styles-CJN2GPDR_css.mjs').then(m => m.default)}
  },
};
