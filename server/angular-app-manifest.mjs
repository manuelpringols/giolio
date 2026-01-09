
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
    'index.csr.html': {size: 1441, hash: 'f937bd0fab92a08aac36ceb072a014692a4cbd75b41205e8c39e12f533dbdd15', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: 'cbcf32885bef972ec6622c5fa24c57a53dff83ee4d97c8dff51b2959cf1f3074', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28101, hash: '17b3314e02dabb4a9343166aabb96dad56bc99768314d58067f004caa9f2e162', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6UODEDGU.css': {size: 2106, hash: 'VjEYY5mbeLc', text: () => import('./assets-chunks/styles-6UODEDGU_css.mjs').then(m => m.default)}
  },
};
