<template>
  <div class="group">
    <h2 class="group_title">
      <add-button /> Приходы / {{ $store.state.orders.length }}
    </h2>
    <div class="group-list_wrapper">
      <ul v-if="orders" class="group-list">
        <li
          v-for="order of orders"
          :key="order.id"
          @click="showProducts(order.id)"
        >
          <app-group-item :order="order" :currentOrder="currentOrder" />
        </li>
      </ul>
      <router-view />
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import AppGroupItem from "@/components/AppGroupItem.vue";
import { AddButton } from "@/components/reusable";

export default {
  name: "AppGroupPage",
  components: { AppGroupItem, AddButton },
  data() {
    return {
      orders: null,
      products: null,
      currentOrder: null,
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    showProducts(order_id) {
      this.currentOrder = order_id;

      this.router.push({
        name: "group_products",
        params: { id: order_id },
      });
    },
  },

  created() {
    this.orders = this.$store.state.orders;
    this.products = this.$store.state.products;

    if (this.orders.length) {
      this.currentOrder = this.orders[0].id;
      this.router.push({
        name: "group_products",
        params: { id: this.currentOrder },
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.group {
  &_title {
    margin-bottom: 3rem;
    font-size: 1.5rem;
    font-weight: 500;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &_wrapper {
      display: flex;
      gap: 2.5rem;
    }
  }
}
</style>
