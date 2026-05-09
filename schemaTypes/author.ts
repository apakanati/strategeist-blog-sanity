import { defineField, defineType } from 'sanity';

export const author = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            description: 'The name of the author. Can be a first name, full name, name with an initial, or even a nickname.',
            validation: rule => rule.required().max(255),
        }),

        defineField({
            name: 'job_title',
            type: 'string',
            description: 'The author\'s job title or primary contribution to the project.',
            validation: rule => rule.required().max(255),
        }),

        defineField({
            name: 'bio',
            type: 'array',
            of: [
                {
                    type: 'block'
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
            description: 'A short personal bio of the author. Will appear in the footer of any blog post the author has written.',
            validation: rule => rule.required(),
        }),

        defineField({
            name: 'image',
            type: 'image',
            description: 'The author\'s profile photo. Will appear in next to their name in the footer of each blog post they have written.',
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                },
            ],
        }),
    ],
});
