import { defineField, defineType, ValidationContext } from 'sanity';
import { validateColor } from '../validators/color';

const validateActivityWindow = (value: any, context: ValidationContext, failMessage: string): string|true => {
    if (context.document?.activityWindowStart && context.document?.activityWindowEnd) {
        const start = new Date(context.document.activityWindowStart as string).getTime();
        const end = new Date(context.document.activityWindowEnd as string).getTime();

        if (start > end) {
            return failMessage;
        }
    }

    return true;
};

export const roadmapMilestone = defineType({
    name: 'roadmapMilestone',
    title: 'Roadmap Milestone',
    type: 'document',
    groups: [
        {
            name: 'meta',
            title: 'Metadata',
        },
        {
            name: 'content',
            title: 'Content',
        },
        {
            name: 'media',
            title: 'Media',
        },
        {
            name: 'dates',
            title: 'Dates',
        },
    ],
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            group: 'meta',
            validation: rule => rule.required().max(255),
        }),

        defineField({
            name: 'slug',
            type: 'slug',
            group: 'meta',
            options: {
                source: 'title',
                maxLength: 255,
            },
            validation: rule => rule.required(),
        }),

        defineField({
            name: 'status',
            type: 'string',
            group: 'meta',
            options: {
                list: [
                    {
                        title: 'Planned',
                        value: 'planned',
                    },
                    
                    {
                        title: 'In Development',
                        value: 'in-development',
                    },

                    {
                        title: 'Complete',
                        value: 'complete',
                    },
                ],
            },
            initialValue: 'complete',
            validation: rule => rule.required(),
        }),

        defineField({
            name: 'color',
            type: 'string',
            group: 'meta',
            description: 'Will appear as an accent highlight color on roadmap milestone tiles/cards. Opacity is handled by the site, so please use a fully opaque color.',
            validation: rule => rule.required().custom(validateColor)
        }),

        defineField({
            name: 'summary',
            type: 'text',
            group: 'content',
            description: 'An optional, brief overview of the major updates coming in this milestone.',
            validation: rule => rule.max(255),
        }),

        defineField({
            name: 'features',
            type: 'array',
            group: 'content',
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
            group: 'content',
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
            name: 'cover',
            type: 'image',
            group: 'media',
            description: `A "cover" image to use as a major graphic element to represent this milestone.`,
            validation: rule => rule.required().assetRequired(),
        }),

        defineField({
            name: 'target',
            type: 'string',
            group: 'dates',
            description: 'The target release date or deadline for this milestone. This is an open-ended string so you can supply a full date or a vague target like "Q3, 2026".',
            validation: rule => rule.required().max(255),
        }),

        defineField({
            name: 'releaseDate',
            type: 'date',
            group: 'dates',
            description: 'The target release date. This will not be shown on the site, but will be used for sorting/ordering of milestones. Items with later release dates will be shown later in the list.',
            validation: rule => rule.required(),
        }),

        defineField({
            name: 'activityWindowStart',
            type: 'date',
            group: 'dates',
            description: 'The date on which this milestone will start appearing on the roadmap milestones index page. Uses UTC time zone for determining start/end of date.',
            validation: rule => rule.custom((value, context) => validateActivityWindow(value, context, 'Must be earlier than the "activity window end" field.')),
        }),
        
        defineField({
            name: 'activityWindowEnd',
            type: 'date',
            group: 'dates',
            description: 'The date on which this milestone will stop appearing on the roadmap milestones index page. Uses UTC time zone for determining start/end of date.',
            validation: rule => rule.custom((value, context) => validateActivityWindow(value, context, 'Must be later than the "activity window start" field.')),
        }),
    ],
});
