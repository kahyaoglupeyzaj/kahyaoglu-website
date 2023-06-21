import groq from 'groq'
import { getAllBlogPostsSiteMapSlugs } from '~/lib/sanity.client'

export default function SiteMap() {
  return <div>loading</div>
}

export async function getServerSideProps({ res }) {
  const baseUrl = `https://kahyaoglupeyzaj.com`
  const blogPosts = await getAllBlogPostsSiteMapSlugs()

  const baseUrls = [
    "/",
    "/hakkimizda",
    "/referanslar",
    "/kurumsal",
    "/hizmetlerimiz",
    "/iletisim",
    "/hizmetlerimiz/bireysel-hizmetlerimiz",
    "/hizmetlerimiz/bireysel-hizmetlerimiz/tasarim",
    "/hizmetlerimiz/bireysel-hizmetlerimiz/uygulama",
    "/hizmetlerimiz/kurumsal-hizmetlerimiz",
    "/hizmetlerimiz/kurumsal-hizmetlerimiz/tasarim",
    "/hizmetlerimiz/kurumsal-hizmetlerimiz/uygulama",
    "/hizmetlerimiz/kurumsal-hizmetlerimiz/bakim",
    "/blog"]


  const posts = blogPosts.map(slug => {


    return `
      <loc>${baseUrl}blog/${slug.slug}</loc >
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
      <lastmod>${slug.updateTime}</lastmod>
    `
  })


  const basePages = baseUrls.map(url => {
    return `
      <loc>${baseUrl}${url}</loc >
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    `
  })

  const blogPost = [...posts]


  const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${blogPost
      .map(location => {
        return `<url>
                 ${location}
                    </url>
                  `
      })
      .join('')}

      ${basePages
      .map(location => {
        return `<url>
                      ${location}
                    </url>
                  `
      })
      .join('')}
    </urlset>
    `
  res.setHeader('Content-Type', 'text/xml')
  res.write(createSitemap())
  res.end()
  return {
    props: {},
  }
}