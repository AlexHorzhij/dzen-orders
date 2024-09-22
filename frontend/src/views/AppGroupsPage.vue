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
          <app-group-item :order="order" />
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
    };
  },
  setup() {
    const router = useRouter();

    function showProducts(order_id) {
      router.push({
        name: "group_products",
        params: { id: order_id },
      });
    }
    return { showProducts };
  },
  created() {
    this.orders = this.$store.state.orders;
    this.products = this.$store.state.products;
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
      gap: 40px;
    }
  }
}
</style>
