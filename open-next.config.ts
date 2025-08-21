const config = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy"
    },
    handler: "file://./.open-next/server.js",
    assets: "file://./.open-next/assets",
    experimentalAssets: "file://./.open-next/experimental-assets",
    prerenders: "file://./.open-next/prerenders"
  },
  edgeExternals: ["node:crypto"],
  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy"
    }
  }
};

export default config;
