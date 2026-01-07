
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
    'index.csr.html': {size: 1209, hash: '2eed89b44509a194f4aac81908e67fa282a571f148363793affc62189e242b1d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: '6bd881a417b68bd3e399fc40bde86e9400bf10d5df29d559128409df67cd82d9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17994, hash: '8db73df11648af8601dd2ed57ab82491c112234fc8e61d99d3e43cc4234b4742', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5QGK26VD.css': {size: 1444, hash: 'aSm1TiXrNLQ', text: () => import('./assets-chunks/styles-5QGK26VD_css.mjs').then(m => m.default)}
  },
};
