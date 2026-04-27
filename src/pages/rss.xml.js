import rss from "@astrojs/rss";

export async function GET(context) {
  const posts = await import.meta.glob("./posts/*.md", { eager: true });

  return rss({
    title: "My Blog",
    description: "My Astro blog",
    site: context.site,
    items: Object.values(posts).map((post) => ({
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
      description: post.frontmatter.description,
      link: post.url,
    })),
  });
}