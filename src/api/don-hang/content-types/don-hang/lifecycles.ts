export default {
  async beforeCreate(event) {
    const { data } = event.params;
    
    // Generate order code if not provided
    if (!data.maDonHang) {
      const timestamp = Date.now();
      const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      data.maDonHang = `DH${timestamp}${random}`;
    }
  },
};

