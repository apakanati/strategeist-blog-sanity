import { defineField, defineType } from 'sanity';

export const tag = defineType({
    name: 'tag',
    title: 'Tag',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            description: 'The name of the tag. Will appear in the blog sidebar if any posts are assigned to this tag.',
            validation: rule => rule.required().max(255),
        }),

        defineField({
            name: 'slug',
            type: 'string',
            description: 'The URL-friendly version of this tag\'s title. Should only contain lowercase letters, numbers, and hyphens. Should not start or end with a hyphen.',
            validation: rule => rule.required().max(255),
        }),
    ],
});
