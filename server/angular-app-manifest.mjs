
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
    'index.csr.html': {size: 1441, hash: '292f6c9c81847315a393a602037d68892510f975284a3040d5e18412a28ec2d8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: '779a219e7d7311dbdb3bccdae92c45de84d777ebb64aa90f9c689b5ebc4155a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27511, hash: 'e7ec4335c7c45f20bacde59a8d33bec7cbadb1ffbb430ae3768b8c83c15c76d9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-F5I6R27F.css': {size: 2250, hash: 'SG/5mb3oUmk', text: () => import('./assets-chunks/styles-F5I6R27F_css.mjs').then(m => m.default)}
  },
};
