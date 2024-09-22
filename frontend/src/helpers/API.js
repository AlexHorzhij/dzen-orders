import { orders, products } from "@/data/data";

const API = {
  getOrders: async () => {
    return orders;
  },
  getProducts: async () => {
    return products;
  },
};

export default API;
