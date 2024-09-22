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
      console.log("payload: ", payload);
      state.orders = payload;
    },
    deleteOrder(state, id) {
      state.orders = state.orders.filter((item) => item.id !== id);
    },
    setProducts(state, payload) {
      state.products = payload;
    },
  },
});

export default store;
