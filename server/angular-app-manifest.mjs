
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
    'index.csr.html': {size: 1291, hash: '78d33e98cfe46020e36b8d7f6da473d2a264f0fb345ee409cd69adac78559311', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: '2cb903731ac0a41de172291d0e08ec08a75a6b6d5218cf7ca77e6d9f7169f800', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25993, hash: '00fb528db58c2f5f717cd01fff00d8c4b5f1da02ef8da214c8c712ba7b08538d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QBFKMMZL.css': {size: 2010, hash: 'udV8tLGc2HY', text: () => import('./assets-chunks/styles-QBFKMMZL_css.mjs').then(m => m.default)}
  },
};
