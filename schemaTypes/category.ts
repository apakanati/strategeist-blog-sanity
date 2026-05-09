import { defineField, defineType } from 'sanity';

export const category = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            description: 'The name of the category. Will appear in the blog sidebar if any posts are assigned to this category.',
            validation: rule => rule.required().max(255),
        }),

        defineField({
            name: 'slug',
            type: 'string',
            description: 'The URL-friendly version of this category\'s title. Should only contain lowercase letters, numbers, and hyphens. Should not start or end with a hyphen.',
            validation: rule => rule.required().max(255),
        }),

        defineField({
            name: 'description',
            type: 'text',
            description: 'A description of the content the viewer is likely to find within this category. If provided, will appear in the header of the category page when browsing blog posts within that category.',
            validation: rule => rule.max(255),
        }),
    ],
});
