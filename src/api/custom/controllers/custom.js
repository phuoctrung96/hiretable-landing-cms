'use strict';

/**
 * A set of functions called "actions" for `custom`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      let data = ctx.request.body.data;
      if (Object.keys(data).length) {
        const rdata = await strapi.entityService.create('api::deal.deal', {
          data
        });

        await strapi.plugins['email'].services.email.send({
          to: data.email,
          from: 'admin@strapi.io',
          subject: 'Your Deal',
          text: `
            PRICE: ${data.price}
            LOCATION: ${data.location}
            First Name: ${data.firstName}
            Last Name: ${data.lastName}
            Phone: ${data.phone}
            Site URL: ${data.url}
          `,
        });
        return rdata
      } else {
        return { status: false, message: 'invalid data' }
      }
    } catch (err) {
      return err;
    }
  }
};