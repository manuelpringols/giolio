
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
    'index.csr.html': {size: 1441, hash: '5aff5ce3170e829d83afaec610c3d1dacc32fcf7ea8289ec04edb3374766e03f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: 'e199effc431914d3318ec6b2d7d78404ba02547b80008914d6d125740ade1add', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28102, hash: '7caf314230ee0d9b00dfb374063dd89b238146d1d3958840ddd23dfac0da3224', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6UODEDGU.css': {size: 2106, hash: 'VjEYY5mbeLc', text: () => import('./assets-chunks/styles-6UODEDGU_css.mjs').then(m => m.default)}
  },
};
