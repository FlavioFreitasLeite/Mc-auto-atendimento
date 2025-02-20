import type { NextConfig } from "next";
import { hostname } from "os";


// next.config.js
module.exports = {
  images: {
    domains: ["u9a6wmr3as.ufs.sh"], // Adicione seu domínio aqui
  },
};

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{hostname: "u9a6wmr3as.ufs.sh"}]
  }

 

};

export default nextConfig;
