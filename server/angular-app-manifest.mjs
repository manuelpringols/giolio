
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
    'index.csr.html': {size: 1209, hash: '80d6e61a4dfae0a742cb4bdba0e8c0173c9d3c50dcf984db322928631f84fafc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: '67b9c47f8cd8ef6041079f555ad88b8d2ab0500d16f3394206ddbdd2b2e3f14c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17782, hash: 'a8a7e8c131d6c456a990193ac85f3ef5b5133c3e4066d65e0f9d9be407816259', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CJN2GPDR.css': {size: 1367, hash: 'LXK6nvrtXPU', text: () => import('./assets-chunks/styles-CJN2GPDR_css.mjs').then(m => m.default)}
  },
};
