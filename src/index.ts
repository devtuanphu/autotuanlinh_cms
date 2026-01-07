import type { Core } from '@strapi/strapi';
import { seedData } from './seed';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Only seed in development mode or if FORCE_SEED is set
    // const forceSeed = process.env.FORCE_SEED === 'true';
    // if (process.env.NODE_ENV === 'development' || forceSeed) {
    //   console.log('🌱 Seed mode:', forceSeed ? 'FORCE' : 'AUTO');
    //   await seedData(strapi);
    // } else {
    //   console.log('ℹ️ Seed skipped (NODE_ENV is not development and FORCE_SEED is not set)');
    // }
  },
};
