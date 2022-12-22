module.exports = ({ env }) => ({
    // ...
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: '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',
            },
            settings: {
                defaultFrom: 'no-reply@hiretable.com',
                defaultReplyTo: 'feedback@hiretable.com',
            },
        },
    },
});