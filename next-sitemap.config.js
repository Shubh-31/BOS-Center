/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bos.center", // ✅ no "www"
  generateRobotsTxt: false,
  sitemapSize: 1000000,
  generateIndexSitemap: false,
  outDir: "./public",
  trailingSlash: false,

  exclude: [
    "/services/verification/pan-card-verify-api",
    "/services/verification/gst-verify-api",
    "/services/verification/bank-account-verify-api",
    "/services/verification/aadhaar-card-verify-api",
    "/services/travel/train-booking-api",
    "/services/travel/hotel-booking-api",
    "/services/travel/flight-booking-api",
    "/services/travel/bus-booking-api",
    "/services/payment/upi-qr-payment-api",
    "/services/payment/recharge-bill-payment-api",
    "/services/payment/payout-api",
    "/services/payment/payment-gateway-api",
    "/services/payment/payin-api",
    "/services/payment/money-transfer-api",
    "/services/payment/emi-collection-api",
    "/services/payment/fastag-recharge-api",
    "/services/payment/aeps-api",
    "/services/banking-&-financial/virtual-account-api",
    "/services/banking-&-financial/pan-card-creation-api",
    "/services/banking-&-financial/fd-rd-deposit-api",
    "/services/banking-&-financial/cibil-score-api",
    "/blogpost/third-blog",
    "/blogpost/second-blog",
    "/blogpost/forth-blog",
    "/blogpost/first-blog",
    "/blogpost/fifth-blog",
    "/products",
    "/seo",
  ],

  transform: async (config, path) => {
    // Remove `/solutions/enterprise/` prefix
    let newPath = path;

    // Flatten "solutions/enterprise"
    newPath = newPath.replace(/^\/solutions\/enterprise\//, "/");

    // Flatten "solutions/"
    newPath = newPath.replace(/^\/solutions\//, "/");

    // Flatten "services/digital-marketing-services"
    newPath = newPath.replace(/^\/services\/digital-marketing-services\//, "");

    // Flatten "services/"
    newPath = newPath.replace(/^\/services\//, "/");

    // Flatten "solutions/banking-financial"
    newPath = newPath.replace(/^\/solutions\/banking-financial\//, "");

    // Flatten "banking-financial/"
    newPath = newPath.replace(/^\/banking-financial\//, "");

    // Flatten "customers/"
    newPath = newPath.replace(/^\/customers\//, "");

    // Flatten "enterprise/"
    newPath = newPath.replace(/^\/enterprise\//, "");

    // 🚀 Remove trailing slash except root "/"
    if (newPath !== "/") {
      newPath = newPath.replace(/\/$/, "");
    }

    const customPriorities = {
      "/": 1.0,
      "/about-us": 0.7,
      "/contact-us": 0.9,
      "/services/application-development": 0.9,
      "/pricing": 0.9,
      "/advantages": 0.9,
      "/sectors": 0.9,
      "/blogs": 0.8,
      "/privacy-policy": 0.9,
      "/digital-marketing-services": 0.9,
      "/travel-management-software": 0.9,
      "/terms-condition": 0.8,
      "/cancellation-refund": 0.8,
    };

    return {
      loc: newPath,
      changefreq: "daily",
      priority: customPriorities[newPath] ?? 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
