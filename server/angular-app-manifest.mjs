
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
    'index.csr.html': {size: 1291, hash: 'd76558f87eb2e2e8fa6645a9d5f3aeaeb77bcba140960bdb1aeef3c1d6cd2798', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: 'e216a914bf3883cca9541a72177999766c6089050d40227d8800b117632187d0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24165, hash: '73183eb3c18f7ca781c3c2fd3d7fd6f720772539061add6e6eec545ddf2803c4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YGOLIP44.css': {size: 1686, hash: 'ut+qFh5wYRo', text: () => import('./assets-chunks/styles-YGOLIP44_css.mjs').then(m => m.default)}
  },
};
