
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
    'index.csr.html': {size: 1209, hash: '8f02de42c55b7077a50f19b856ffac311db45665dff47182a0513c3dc22a8229', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: 'e7c3e187fafe9e72949910efec53ae3f29bb2000339534abcb3eba3985c8d181', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17917, hash: '335d2d76eee997273ea02dbc096b5b566cb49ae205ff61fa260347623d832970', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CJN2GPDR.css': {size: 1367, hash: 'LXK6nvrtXPU', text: () => import('./assets-chunks/styles-CJN2GPDR_css.mjs').then(m => m.default)}
  },
};
