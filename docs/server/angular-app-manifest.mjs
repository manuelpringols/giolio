
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/repo/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/repo"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1207, hash: 'fa1a63567fccd05a69bd1f9a25dff4bd9158f1835f191a520a16acec5b401122', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 949, hash: 'f101cc09ebcc4c4fce1cc08c83df6abb20f537b0cac963be69218e7e6cf3bb8c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17765, hash: '5137710555baf31523e9e96d5e6325083c7a627b9e335ecd005d9d5f146468f6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CJN2GPDR.css': {size: 1367, hash: 'LXK6nvrtXPU', text: () => import('./assets-chunks/styles-CJN2GPDR_css.mjs').then(m => m.default)}
  },
};
