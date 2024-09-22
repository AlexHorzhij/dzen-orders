<template>
  <div class="product-list_wrapper">
    <h2 class="product-list_title long-field_wrapper">
      <div class="long-field">{{ getOrder.title }}</div>
    </h2>
    <div class="product-list_add-btn"><add-product-btn /></div>
    <ul v-if="getProducts">
      <li
        v-for="product of getProducts"
        :key="product.id"
        class="product-list_item"
      >
        <app-group-product-item :product="product" />
      </li>
    </ul>
  </div>
</template>

<script>
import AppGroupProductItem from "@/components/AppGroupProductItem.vue";
import { AddProductBtn } from "@/components/reusable";

export default {
  name: "AppProductsList",
  components: { AppGroupProductItem, AddProductBtn },
  data() {
    return {
      products: null,
    };
  },
  props: {
    id: String,
  },
  computed: {
    getProducts() {
      const allOrders = this.$store.state.orders;
      const order = allOrders.find((item) => item.id === Number(this.id));
      return order.products;
    },
    getOrder() {
      const allOrders = this.$store.state.orders;
      const order = allOrders.find((item) => item.id === Number(this.id));
      return order;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.product-list {
  &_wrapper {
    width: 100%;
    background: $white;
  }

  &_title {
    font-size: 1.5rem;
    font-weight: 500;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    max-width: 50rem;
  }

  &_add-btn {
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
  }

  &_item {
    cursor: default;
  }
}
</style>
