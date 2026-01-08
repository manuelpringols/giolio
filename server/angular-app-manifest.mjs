
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
    'index.csr.html': {size: 1291, hash: 'c321c29d707282b9f5e605cc992c15b5119084a4e9b09086bf0fa8a204efd153', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: '9b0abdfa0de9f345b99790aa42855cb3322dff2f15273f9ba725b5f95f79813f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25963, hash: 'e8f7e2ee077ef6313b9a7f35e19b489a7c9f4ff9d0437877268d6ede406849c4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QBFKMMZL.css': {size: 2010, hash: 'udV8tLGc2HY', text: () => import('./assets-chunks/styles-QBFKMMZL_css.mjs').then(m => m.default)}
  },
};
