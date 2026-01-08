
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
    'index.csr.html': {size: 1291, hash: '755f1aecd290ad247c5f9414cb0f76de59c3a5b7ea2be75e58e65eb5c0e6fc5c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: 'efbd0c84827f0c15fddffc8a9a87fedf1cfedee1fd650383f10be2b2cb61802e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25978, hash: '8b9d952035e732a4471670bf90b1c23e075ece78a90b87a78ba4ab60fa2de4e9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QBFKMMZL.css': {size: 2010, hash: 'udV8tLGc2HY', text: () => import('./assets-chunks/styles-QBFKMMZL_css.mjs').then(m => m.default)}
  },
};
