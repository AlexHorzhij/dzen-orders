import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      products: [],
      orders: [],
    };
  },
  mutations: {
    setOrders(state, payload) {
      state.orders = payload;
    },
    deleteOrder(state, id) {
      state.orders = state.orders.filter((item) => item.id !== id);
      state.products = state.products.filter((item) => item.order !== id);
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    deleteProduct(state, id) {
      state.products = state.products.filter((item) => item.id !== id);
    },
  },
});

export default store;
