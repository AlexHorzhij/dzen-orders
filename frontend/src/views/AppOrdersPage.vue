<template>
  <div class="orders">
    <h2 class="orders_title"><add-button /> Приходы / {{ orders?.length }}</h2>
    <ul v-if="orders" class="orders_list">
      <li
        v-for="order of this.$store.state.orders"
        :key="order.id"
        class="orders_item"
      >
        <app-order-item :order="order" />
        <app-delete-modal :order="order" @delete="removeOrder(order.id)" />
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
    return { orders: this.$store.state.orders };
  },
  methods: {
    removeOrder(id) {
      this.$store.commit("deleteOrder", id);
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
    overflow-x: auto;
    width: 100%;
  }

  &_title {
    font-size: 1.5rem;
    font-weight: 500;
  }

  &_item {
    width: fit-content;
    flex-grow: 1;
  }
}
</style>
