import {glob} from 'astro/loaders';
import {defineCollection, z} from 'astro:content';

const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({base: './src/content/blog', pattern: '**/*.{md,mdx}'}),
    // Type-check frontmatter using a schema
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: image().optional(),
        imageAuthor: z.string().optional(),
        imageAuthorLink: z.string().optional(),
        imageSource: z.string().optional(),
        imageSourceLink: z.string().optional()
        , tags: z.array(z.string()).default(['uncategorized']),
    }),
});

export const collections = {blog};
