const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (root) {
    
    root.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8000',
            changeOrigin:true,
            secure:false,
            headers: {
                'Acess-Control-Allow-Origin':'http://localhost:3000'
            }
        })
    );
};