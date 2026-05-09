import { defineField, defineType } from 'sanity';

export const youtube = defineType({
    name: 'youtube',
    title: 'YouTube URL',
    type: 'object',
    fields: [
        defineField({
            name: 'url',
            type: 'url',
            description: 'The URL of your YouTube video.',
            validation: rule => rule.required().custom((value, context) => {
                if (!value?.includes('youtube.com') && !value?.includes('youtu.be')) {
                    return 'URL must be a valid YouTube URL containing either a "youtube.com" or "youtu.be" domain.';
                }

                return true;
            }),
        }),
    ],
});
