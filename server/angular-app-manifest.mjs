
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
    'index.csr.html': {size: 1441, hash: '65848a27eb40c83854fecfb01d406754e9c6fd0364f46dc3efcc6decf77d3556', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: '70d6010a4f9bec5e98caf9b0db20f2042ddb1da640ca3efe5d3e03d7a004ffd2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 28101, hash: '112fff31a040797f0e7478e723fff01405f2b3c9357896edb0473237e434185b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6UODEDGU.css': {size: 2106, hash: 'VjEYY5mbeLc', text: () => import('./assets-chunks/styles-6UODEDGU_css.mjs').then(m => m.default)}
  },
};
