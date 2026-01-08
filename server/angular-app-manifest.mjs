
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
    'index.csr.html': {size: 1299, hash: 'e545f8b9f512a22983ed7e30588b3643f5d9056d73e555b8656469f820037e39', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: 'ecb055dee98852292948771a2f192b516650139d361fe45bf341285010b0d385', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25971, hash: 'c0492e040e469298f44508a168b18c2f3c0852f19fe23e4bac60ad78ba1e5a07', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QBFKMMZL.css': {size: 2010, hash: 'udV8tLGc2HY', text: () => import('./assets-chunks/styles-QBFKMMZL_css.mjs').then(m => m.default)}
  },
};
