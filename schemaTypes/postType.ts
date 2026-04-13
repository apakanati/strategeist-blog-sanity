import { defineField, defineType } from 'sanity';

export const postType = defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: rule => rule.required().max(255),
        }),

        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: rule => rule.required(),
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
            ],
            validation: rule => rule.required(),
        }),
    ],
});
