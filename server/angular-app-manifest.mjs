
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
    'index.csr.html': {size: 1291, hash: 'ac1e590a2778ddfa1d0fafc05d83c26e77d01670beee001f58bee1f17c3f6f20', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: '411fad42f2b12628d4286d93d6227e2ba170f9fac086471f3fe7c694575b09af', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24120, hash: '769e35e0645eb23f4a5fc4f6defe7b2d56bad1f593fae016fd89d8a44460264d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YGOLIP44.css': {size: 1686, hash: 'ut+qFh5wYRo', text: () => import('./assets-chunks/styles-YGOLIP44_css.mjs').then(m => m.default)}
  },
};
