import { defineField, defineType } from 'sanity';
import { category } from './category';
import { tag } from './tag';

export const post = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            description: 'The title of your blog post. Appears at the top of the blog post page when viewed, and in the list of blog posts.',
            validation: rule => rule.required().max(255),
        }),

        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            description: 'The URL-friendly version of your post\'s title. Should only contain lowercase letters, numbers, and hyphens. Should not start or end with a hyphen.',
            validation: rule => rule.required(),
        }),

        defineField({
            name: 'summary',
            type: 'text',
            description: 'A short summary of the content in the blog post. If not provided, one will be automatically generated from the content field. The summary will appear anywhere that blog posts appear in a list.',
            validation: rule => rule.max(255),
        }),

        defineField({
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alternative Text',
                            type: 'string',
                        },
                    ],
                },
                {
                    type: 'youtube'
                },
            ],
            description: 'The main content of your blog post, written in blocks of richtext.',
            validation: rule => rule.required(),
        }),

        defineField({
            name: 'featured_image',
            type: 'image',
            description: 'Optional, but highly recommended. If provided, this image will appear in any cards or lists in which this blog post appears. This image will also be shown on social networks when the blog post is shared.',
        }),

        defineField({
            name: 'is_featured',
            type: 'boolean',
            initialValue: false,
            description: 'If set, this blog post will appear above others in a special "Featured" section at the top of the blog homepage.',
        }),

        defineField({
            name: 'categories',
            type: 'array',
            description: 'The categories that this blog post should appear in.',
            of: [
                {
                    type: 'reference',
                    to: category,
                }
            ],
        }),

        defineField({
            name: 'tags',
            type: 'array',
            description: 'The tags that this blog post is tagged with. Good for SEO and for quickly organizing large amounts of content. Provides a quick and easy link from one blog post to others of its kind.',
            of: [
                {
                    type: 'reference',
                    to: tag,
                }
            ],
        }),

        defineField({
            name: 'sunrise',
            type: 'datetime',
            description: 'The date/time that this blog post should be considered published. If not provided, this blog post will be considered a "draft" and will only appear when previewing blog content.',
        }),

        defineField({
            name: 'sunset',
            type: 'datetime',
            description: 'The date/time that this blog post should be considered published. If not provided, this blog post will be considered a "draft" and will only appear when previewing blog content.',
        }),
    ],
});
