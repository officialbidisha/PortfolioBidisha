/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Content-Security-Policy', value: "frame-ancestors 'none'" },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

module.exports = {
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      // The résumé is linked from the site; keep the PDF itself out of search results.
      { source: '/assets/resume.pdf', headers: [{ key: 'X-Robots-Tag', value: 'noindex, noarchive' }] },
    ];
  },
  async redirects() {
    // These used to be routable pages because the components lived in pages/.
    return ['/content', '/header', '/left-content-sidebar'].map((source) => ({
      source,
      destination: '/',
      permanent: true,
    }));
  },
};
