/**
 * san-pham controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::san-pham.san-pham', ({ strapi }) => ({


  async addReview(ctx) {
    const { slug } = ctx.params;
    const { customerName, email, rating, content } = ctx.request.body.data;

    if (!customerName || !email || !rating || !content) {
      return ctx.badRequest('Missing required fields (customerName, email, rating, content)');
    }

    const ratingNum = Number(rating);
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return ctx.badRequest('Rating must be a number between 1 and 5');
    }

    try {
      const results = await strapi.documents('api::san-pham.san-pham').findMany({
        filters: { slug: { $eq: slug } },
        populate: ['reviews'],
      });

      const product = results[0];
      if (!product) return ctx.notFound('Product not found');

      const documentId = product.documentId;
      const newReview = { customerName, email, rating: ratingNum, content, isApproved: true };
      const currentReviews = (product as any).reviews || [];
      const updatedReviews = [...currentReviews, newReview];
      
      const reviewCount = updatedReviews.length;
      const totalRating = updatedReviews.reduce((sum, rev) => sum + (Number(rev.rating) || 0), 0);
      const averageRating = Number((totalRating / reviewCount).toFixed(1));

      await strapi.documents('api::san-pham.san-pham').update({
        documentId: documentId,
        data: { reviews: updatedReviews, rating: averageRating, reviewCount: reviewCount } as any,
      });

      return ctx.send({ data: { newReview, rating: averageRating, reviewCount: reviewCount } });
    } catch (error) {
      return ctx.internalServerError('Failed to add review');
    }
  },

  async getRelated(ctx) {
    const { slug } = ctx.params;
    try {
      const categories = await strapi.documents('api::danh-muc-san-pham.danh-muc-san-pham').findMany({
        filters: { danhMucCapHai: { danhMucCapBa: { san_phams: { slug: { $eq: slug } } } } },
        populate: { danhMucCapHai: { populate: { danhMucCapBa: { populate: { san_phams: true } } } } }
      });

      if (!categories || categories.length === 0) return ctx.send({ data: [] });

      let allProductIds = [];
      for (const cat of categories) {
        const capHai = (cat as any).danhMucCapHai || [];
        for (const cap2 of capHai) {
          const capBaList = cap2.danhMucCapBa || [];
          for (const cap3 of capBaList) {
            if (cap3.san_phams?.some(p => p.slug === slug)) {
              allProductIds = [...new Set([...allProductIds, ...cap3.san_phams.map(p => p.id)])];
            }
          }
        }
      }

      if (allProductIds.length === 0) return ctx.send({ data: [] });

      const relatedProducts = await strapi.documents('api::san-pham.san-pham').findMany({
        filters: { id: { $in: allProductIds }, slug: { $ne: slug } },
        populate: ['anhSanPham'],
        limit: 24,
      });
      return ctx.send({ data: relatedProducts });
    } catch (error) {
      return ctx.internalServerError('Failed to fetch related products');
    }
  }
}));
