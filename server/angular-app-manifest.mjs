
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
    'index.csr.html': {size: 1291, hash: '0aef3f818e83d57d0c9ae2e89ada4b4364c32d3ec30ef17ae75318710f31f245', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: 'dde9cc85deac47397515ee58a6495ab504bd9ccce5c205d1fbf2253023dc7f12', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24060, hash: 'd66b8c929a52f9d88d32dfc9f64016641c69e463fc04d86587276e93d580cf2c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YGOLIP44.css': {size: 1686, hash: 'ut+qFh5wYRo', text: () => import('./assets-chunks/styles-YGOLIP44_css.mjs').then(m => m.default)}
  },
};
