
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
    'index.csr.html': {size: 1441, hash: 'b92e1786907d837e66a6c6cc557735afcb59155adca1990b620b35c28abda800', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: '195d86ba1ac26d666481f30a453eb9a9ece1c370b22126000e319ac7ebc66b6d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27511, hash: '849f18db52dd5a6fd39ef7126e2dc33bbf0a22b391899c1e4b1e549fb00cb95f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-F5I6R27F.css': {size: 2250, hash: 'SG/5mb3oUmk', text: () => import('./assets-chunks/styles-F5I6R27F_css.mjs').then(m => m.default)}
  },
};
