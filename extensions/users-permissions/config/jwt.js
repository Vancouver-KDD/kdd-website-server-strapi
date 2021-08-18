// module.exports = {
//   jwtSecret: process.env.JWT_SECRET || 'dea647ae-82af-4c84-b03a-be23a9ff18cf'
// };

const _ = require('lodash');
const axios = require('axios');

module.exports = async (ctx, next) => {
  let role;

  if (ctx.request && ctx.request.header && ctx.request.header.authorization) {
    try {
      const { id, isAdmin = false } = await strapi.plugins[
        'users-permissions'
      ].services.jwt.getToken(ctx);

      // ...

    } catch (err) {
      try {
        const data = await axios({
          method: 'post',
          url: 'http://YOUR_DOMAIN/userinfo',
          headers: {
            Authorization: ctx.request.header.authorization
          }
        });

        // if you want do more validation test
        // feel free to add your code here.

        return await next();
      } catch (error) {
        return handleErrors(ctx, new Error('Invalid token: Token did not match with Strapi and Auth0'), 'unauthorized');
      }
    }
  }
}
