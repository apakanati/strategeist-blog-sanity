import { defineField, defineType } from 'sanity';

export const roadmapMilestone = defineType({
    name: 'roadmapMilestone',
    title: 'Roadmap Milestone',
    type: 'document',
    groups: [
        {
            name: 'misc',
            title: 'Miscellaneous',
        },
    ],
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: rule => rule.required().max(255),
        }),

        defineField({
            name: 'cover',
            type: 'image',
            description: `A "cover" image to use as a major graphic element to represent this milestone.`,
            validation: rule => rule.required().assetRequired(),
        }),

        defineField({
            name: 'summary',
            type: 'text',
            description: 'An optional, brief overview of the major updates coming in this milestone.',
            validation: rule => rule.max(255),
        }),

        defineField({
            name: 'features',
            type: 'array',
            of: [
                {
                    type: 'string',
                    validation: rule => rule.required().max(255),
                },
            ],
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
            description: 'The main content of this patch note, written in blocks of richtext.',
            validation: rule => rule.required(),
        }),

        defineField({
            name: 'target',
            type: 'string',
            description: 'The target release date or deadline for this milestone. This is an open-ended string so you can supply a full date or a vague target like "Q3, 2026".',
            validation: rule => rule.required().max(255),
        }),
    ],
});
