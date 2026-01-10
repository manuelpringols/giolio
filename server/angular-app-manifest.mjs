
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
    'index.csr.html': {size: 1441, hash: '7b1202f950bd474646845e7611bf11a6da8be4e87b04ebcb63bef08c3f7a50d4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: '01c08f68f94b030eab816d83acefec77d363a9c987d220452df878d53b839c57', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30392, hash: '36c49de36b071e9c3067d2ae159414044a6688eecdf00440c5bd057b460c8eb3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NAVU4QTU.css': {size: 2092, hash: 'xqJvUCSxrY4', text: () => import('./assets-chunks/styles-NAVU4QTU_css.mjs').then(m => m.default)}
  },
};
