import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export const GET = async (context: any) => {
  const posts = await getCollection('posts');
  return rss({
    title: 'rice-dev blog',
    description: 'my personal blog',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blogs/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
};
