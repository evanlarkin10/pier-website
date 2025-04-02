/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL ||
    (process.env.NODE_ENV === "production"
      ? "https://innatthepier.com"
      : "https://pier-website.vercel.app"),
  generateRobotsTxt: true,
  output: "./out",
  transform: (config, path) => {
    // Custom priority rules
    let priority = 0.7; // Default priority

    if (path === "/") {
      priority = 1.0; // Homepage gets highest priority
    } else if (path === "/rooms" || path.includes("/room")) {
      priority = 0.8; // Room pages get higher priority
    } else if (path === "/contact") {
      priority = 0.6; // Contact page gets medium priority
    }

    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
