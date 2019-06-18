// preact.config.js

module.exports = function(config) {
  config.devServer.proxy = [
    {
      // proxy requests matching a pattern:
      path: '/api/**',

      // where to proxy to:
      target: 'http://blomp.localhost:3000',

      // optionally change Origin: and Host: headers to match target:
      changeOrigin: true,
      changeHost: true,

      // optionally mutate request before proxying:
      pathRewrite: function(path, request) {
        // you can modify the outbound proxy request here:
        delete request.headers.referer

        return path
      },

      // optionally mutate proxy response:
      onProxyRes: function(proxyRes, req, res) {
        // you can modify the response here:
        proxyRes.headers.connection = 'keep-alive'
        proxyRes.headers['cache-control'] = 'no-cache'
      },
    },
  ]
}
