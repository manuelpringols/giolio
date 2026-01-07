
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
    'index.csr.html': {size: 1209, hash: 'bbd394d83fdfddad1ad33850076b4f32701335e6ecd8406952f3196bd61867c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: '3ba4c52a9455e27a851c7b56c7cd33841fe935e1e4d4eba9993cd9da73239fa5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17767, hash: '872583f898acfb4dd897eeba9b24c219e5afd4e9cfe822d1348b0483cd86bf18', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CJN2GPDR.css': {size: 1367, hash: 'LXK6nvrtXPU', text: () => import('./assets-chunks/styles-CJN2GPDR_css.mjs').then(m => m.default)}
  },
};
