const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://caxus.net' });

sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.end();

streamToPromise(sitemap).then((data) => {
  fs.writeFileSync('./public/sitemap.xml', data.toString());
  console.log('✅ Sitemap generado en ./public/sitemap.xml');
}).catch((error) => {
  console.error('❌ Error generando el sitemap:', error);
});
