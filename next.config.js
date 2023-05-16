/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: {
    dir: 'out',
  },  
  images: {
    loader: "imgix",
    path: "",
    domains: ["placehold.co", "github.com", "raw.githubusercontent.com"],

  },
  swcMinify: true,
}