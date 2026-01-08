
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
    'index.csr.html': {size: 1441, hash: 'e9576ed38c665ebf9593fa715acb51d121fa5c2d0c197a9e2dd6875a4ee34e66', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: 'c2c04a08c49d8f051fb09c6aac385f3bd4af21be9d3543621ac358c418895779', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25995, hash: '19a0ac7713baf4016901ccf2713db1154d338fcd93964cf3a71090777bb358de', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QDWANRRM.css': {size: 2051, hash: '9kFSsYqPH2I', text: () => import('./assets-chunks/styles-QDWANRRM_css.mjs').then(m => m.default)}
  },
};
