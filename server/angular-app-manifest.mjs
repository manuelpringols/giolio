
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
    'index.csr.html': {size: 1209, hash: '78169b767c21a351a3c8f9ac72e6f018defcc8f9a00dc8b4647b77d6aaabfca0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: 'c6a70a12d27f050b83a31b116337123ce535add0a4b660feafa22193408af99d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25256, hash: 'a4bf04bc2380915d54c403ed3c06261b0eadd343e8b56cf0d615c757064f68de', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NNUAQ6OF.css': {size: 1518, hash: 'ghBzIv8i5OI', text: () => import('./assets-chunks/styles-NNUAQ6OF_css.mjs').then(m => m.default)}
  },
};
