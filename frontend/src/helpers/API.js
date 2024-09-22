import { orders, products } from "@/data/data";

const API = {
  getOrders: async () => {
    console.log("orders: ", orders);
    return orders;
  },
  getProducts: async () => {
    return products;
  },
};

export default API;
