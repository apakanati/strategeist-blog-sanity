import { defineField, defineType } from 'sanity';

export const patchNote = defineType({
    name: 'patchNote',
    title: 'Patch Note',
    type: 'document',
    groups: [
        {
            name: 'versioning',
            title: 'Versioning',
        },

        {
            name: 'media',
            title: 'Media',
        },

        {
            name: 'content',
            title: 'Content',
        },

        {
            name: 'dates',
            title: 'Dates',
        },
    ],
    preview: {
        select: {
            majorVersionNumber: 'majorVersionNumber',
            minorVersionNumber: 'minorVersionNumber',
            patchVersionNumber: 'patchVersionNumber',
        },
        prepare(selection) {
            return {
                title: `v${selection.majorVersionNumber}.${selection.minorVersionNumber}.${selection.patchVersionNumber}`,
            };
        },
    },
    fields: [
        defineField({
            name: 'majorVersionNumber',
            type: 'string',
            group: 'versioning',
            validation: rule => rule.required().max(8),
        }),

        defineField({
            name: 'minorVersionNumber',
            type: 'string',
            group: 'versioning',
            validation: rule => rule.required().max(8),
        }),

        defineField({
            name: 'patchVersionNumber',
            type: 'string',
            group: 'versioning',
            validation: rule => rule.required().max(8),
        }),

        defineField({
            name: 'buildNumber',
            type: 'string',
            group: 'versioning',
            validation: rule => rule.required().max(8),
        }),

        defineField({
            name: 'uniqueHash',
            type: 'string',
            group: 'versioning',
            validation: rule => rule.required().max(32),
        }),

        // defineField({
        //     name: 'version',
        //     type: 'string',
        //     description: 'The version number or label (e.g. v1.0.0).',
        //     validation: rule => rule.required().max(255),
        // }),

        // defineField({
        //     name: 'slug',
        //     type: 'slug',
        //     description: 'The URL-friendly version of the patch note version number. Used for determining the direct URL for the patch note.',
        //     options: {
        //         source: 'version',
        //         maxLength: 255,
        //     },
        //     validation: rule => rule.required(),
        // }),

        defineField({
            name: 'cover',
            type: 'image',
            group: 'media',
            description: 'A "cover" image to use in the patch note\'s hero section and on the patch notes index.',
            validation: rule => rule.required().assetRequired(),
        }),

        defineField({
            name: 'summary',
            type: 'text',
            group: 'content',
            description: 'A brief overview of the major updates made in this version. Used to provide a preview on the patch notes index.',
            validation: rule => rule.max(255),
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
            name: 'releaseDate',
            type: 'date',
            group: 'dates',
            validation: rule => rule.required(),
        }),
    ],
});
