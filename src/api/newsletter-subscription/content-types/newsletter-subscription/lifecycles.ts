/**
 * newsletter-subscription lifecycles
 */

export default {
  async beforeCreate(event) {
    const { data } = event.params;
    
    // Tự động set subscribedAt nếu chưa có
    if (!data.subscribedAt) {
      data.subscribedAt = new Date();
    }
    
    // Mặc định isActive = true
    if (data.isActive === undefined) {
      data.isActive = true;
    }
  },
};

