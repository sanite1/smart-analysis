

const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = (app) => {
    app.use("/api", createProxyMiddleware({
        target: "smart-ana-backend-production-7c8e.up.railway.app",
        changeOrigin: true
    }))
}
