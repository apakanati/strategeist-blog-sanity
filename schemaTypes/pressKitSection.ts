import { defineField, defineType } from 'sanity';

export const pressKitSection = defineType({
    name: 'pressKitSection',
    title: 'Press Kit Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: rule => rule.required().max(255),
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
                            description: 'Used for describing the image contents to screen readers. Useful for visitors that have low visibility and use assistive technology. Also highly recommended for search engine optimization (SEO).',
                            type: 'string',
                        },
                    ],
                },
                {
                    type: 'youtube'
                },
            ],
            description: `The content of this section, written in blocks of richtext. It's recommended to start headline hierarchy with "Headline 3" since the title of the section itself will be "Headline 2".`,
            validation: rule => rule.required(),
        }),

        defineField({
            name: 'layout',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Column',
                        value: 'column',
                    },

                    {
                        title: 'Grid',
                        value: 'grid',
                    },
                ],
            },
            initialValue: 'column',
            validation: rule => rule.required(),
        }),

        defineField({
            name: 'sortOrder',
            type: 'number',
            initialValue: 50,
            description: `This is used for sorting the sections on the press kit page. Lower numbers come first, higher numbers come last. Default value is "50". It's recommended to increase/decrease in increments of 5 or 10 so you can fit items between them later if needed. If two sections have the same value for sort order, then their "created at" timestamp is used in ascending order to sort them instead.`,
            validation: rule => rule.required(),
        }),
    ],
});
