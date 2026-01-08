
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
    'index.csr.html': {size: 1291, hash: '31514e196b043047e8b2ed90be1dcd0499cfd70aa0015617b3573340ff6c0b1b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: '78b27269386ab90fee1fe0946eac611f5bdd326030929923f66dc7f42077a45d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 24150, hash: '57be0bad190a9170805be383df8c5dcab11b182cbb1b2582f2cdf2c6a28abc1f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YGOLIP44.css': {size: 1686, hash: 'ut+qFh5wYRo', text: () => import('./assets-chunks/styles-YGOLIP44_css.mjs').then(m => m.default)}
  },
};
