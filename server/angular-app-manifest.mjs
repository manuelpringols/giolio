
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
    'index.csr.html': {size: 1209, hash: '9521a7545d4306bf1f25b416f41427d457c4c17fb6a855ed3a10fc50eea056ea', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: '4e97ce108d262805f2ed87f1451a7727c5138b3a90f93e8e8920181c0fd95698', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25136, hash: '872453a63c8150668ac610f1ea5fa39350c3b8c4a6d5e8079b44d005d87a4360', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-NNUAQ6OF.css': {size: 1518, hash: 'ghBzIv8i5OI', text: () => import('./assets-chunks/styles-NNUAQ6OF_css.mjs').then(m => m.default)}
  },
};
