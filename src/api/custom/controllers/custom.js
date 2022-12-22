'use strict';

/**
 * A set of functions called "actions" for `custom`
 */

const sndMail = async (data) => {
  try {
    await strapi.plugins['email'].services.email.send({
      to: data.email,
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
  } catch (error) {
    console.log('maile error: ', error.message)
  }
}

module.exports = {
  createDeal: async (ctx, next) => {
    try {
      let data = ctx.request.body;
      if (Object.keys(data).length) {
        const entry = await strapi.db.query('api::deal.deal').findOne({
          where: { email: data.email },
        });

        if (entry) {
          return { status: false, message: 'Email already exists.' }
        }

        const rdata = await strapi.entityService.create('api::deal.deal', { data });
        sndMail(data);
        return rdata;
      } else {
        return { status: false, message: 'invalid data' }
      }
    } catch (err) {
      return err;
    }
  }
};