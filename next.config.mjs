/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ['@react-pdf/renderer'],
    },
    webpack: (config) => {
      // Add the rule to handle the pdf.worker.js file
      config.module.rules.push({
        test: /pdf\.worker\.(min\.)?js/,
        type: 'asset/resource',
        generator: {
          filename: 'static/worker/[hash][ext][query]',
        },
      });
  
      return config;
    },
  };
  
  export default nextConfig;