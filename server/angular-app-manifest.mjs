
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
    'index.csr.html': {size: 1209, hash: '4a7c43c6a6160d3b348486d99c246fe07d528b997ad9b17b31beedc4ecd82397', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: '620296c61b2593198d3b0cf0955f03db4a2358663f499d8f679899ad40ff14dc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25263, hash: 'e04c4ec62a1142f7ce086a9733f888ccd31fd9d68fce835a11972b4ff3287a5e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NNUAQ6OF.css': {size: 1518, hash: 'ghBzIv8i5OI', text: () => import('./assets-chunks/styles-NNUAQ6OF_css.mjs').then(m => m.default)}
  },
};
