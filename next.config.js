/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    loader: "imgix",
    path: "",
    domains: ["placehold.co", "github.com", "raw.githubusercontent.com"],

  },
  swcMinify: true,
}