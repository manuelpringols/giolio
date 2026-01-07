
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
    'index.csr.html': {size: 1209, hash: 'a3d788e59b142ae90fc5b0e1d6cb114678fd87916598f8facfd694f03d2b68d9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: '28b154364132ea7cab4782664196c84468b41e782c70fe7c9e7740654c9e02b9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17995, hash: 'f357566d4a977af90f6f939b614713128bbbdb4852bc4fa3b57297c9ebed92f0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-LIWJRCVH.css': {size: 1445, hash: 'VzGADAXU8K8', text: () => import('./assets-chunks/styles-LIWJRCVH_css.mjs').then(m => m.default)}
  },
};
