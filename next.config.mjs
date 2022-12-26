/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [__dirname, 'styles'],
  },
  images: {
    domains: ['localhost']
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}

export default nextConfig