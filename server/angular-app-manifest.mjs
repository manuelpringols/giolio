
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
    'index.csr.html': {size: 1441, hash: '383367293dbc60565579ffb1fc2e9e5e27817b8a5ba94a587b2963558b35d028', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: 'cc4bbf5fa09ab742076cee6b2cc13117a7406ede46e366420f6ec86d6e17530b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28102, hash: '179fb805b4f5d2530ec091bc05ee8700070ff661a0ff844e5097ac78a54fea0d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6UODEDGU.css': {size: 2106, hash: 'VjEYY5mbeLc', text: () => import('./assets-chunks/styles-6UODEDGU_css.mjs').then(m => m.default)}
  },
};
