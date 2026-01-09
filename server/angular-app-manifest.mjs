
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
    'index.csr.html': {size: 1441, hash: '9a1cdcdd5256f6383382641f266dd7c84d49853e74806ce31d3123144d31e8e0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: '127d2be108aea1ad3c8f5078bf77e29b880af2c910e038d18b91cf59d4d0a25c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 29923, hash: 'e2df1929ac87b09866519e1c5376f11eeaf4ce0e18a7d65d2ebbbb1c1fe795c5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-F5I6R27F.css': {size: 2250, hash: 'SG/5mb3oUmk', text: () => import('./assets-chunks/styles-F5I6R27F_css.mjs').then(m => m.default)}
  },
};
