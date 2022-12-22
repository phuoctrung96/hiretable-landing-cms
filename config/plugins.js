module.exports = ({ env }) => ({
    // ...
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API'),
            },
            settings: {
                defaultFrom: env('SEND_EMAIL'),
                defaultReplyTo: env('REPLY_EMAIL'),
            },
        },
    },
});