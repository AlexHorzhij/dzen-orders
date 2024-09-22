<template>
  <div class="orders">
    <h2 class="orders_title"><add-button /> Приходы / {{ orders?.length }}</h2>
    <ul v-if="orders" class="orders_list">
      <li v-for="order of orders" :key="order.id" class="orders_item">
        <app-order-item :order="order" />
        <app-delete-modal :order="order" />
      </li>
    </ul>
  </div>
</template>

<script>
import AppOrderItem from "@/components/AppOderItem.vue";
import AddButton from "@/components/reusable/AddButton.vue";
import AppDeleteModal from "@/components/AppDeleteModal.vue";

export default {
  name: "AppOrdersPage",
  components: { AppOrderItem, AddButton, AppDeleteModal },
  data() {
    return { orders: null };
  },
  created() {
    this.orders = this.$store.state.orders;
  },
  methods: {
    removeOrder(id) {
      this.$store.state.orders = this.$store.state.orders.filter(
        (item) => item.id !== id
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.orders {
  &_list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem 0;
    overflow-x: scroll;
    width: 100%;
  }

  &_title {
    font-size: 1.5rem;
    font-weight: 500;
  }

  &_item {
    width: 100%;
  }
}
</style>
