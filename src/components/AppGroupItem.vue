<template>
  <div class="group-card">
    <div class="group-card_count group-card_item">
      <div class="group-card_long-field">
        <list-icon class="group-card_count-icon" />
        <div class="group-card_count-products">
          <div class="group-card_count-number">
            {{ $store.state.orders.length }}
          </div>
          <div class="group-card_count-text">Продукта</div>
        </div>
      </div>
    </div>
    <div class="group-card_date group-card_item">
      <div class="group-card_long-field">
        {{ transformDateWithMonth(order.date) }}
      </div>
    </div>
    <div class="group-card_show-product_wrapper">
      <div v-if="currentOrder === order.id" class="group-card_show-product">
        <arrow-icon />
      </div>
    </div>
  </div>
</template>

<script>
import { getDateWithTextMonth } from "@/helpers/getDate";
import ListIcon from "@/assets/icons/ListIcon.vue";
import { ArrowIcon } from "@/assets/icons";

export default {
  name: "AppGroupItem",
  components: { ListIcon, ArrowIcon },
  props: {
    order: Object,
    currentOrder: Number,
  },

  methods: {
    transformDateWithMonth(date) {
      return getDateWithTextMonth(date);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.group-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 21.875rem;
  padding: 0 0 0 1rem;
  border-radius: 0.25rem;
  background: $white;
  color: $secondary_text;
  cursor: pointer;

  border-top: 0.0625rem solid $secondary_color;
  border-bottom: 0.0625rem solid $secondary_color;

  &:hover {
    box-shadow: inset .0625rem 0 0 #dadce0, inset -0.0625rem 0 0 #dadce0,
      0 .0625rem .125rem 0 rgba(60, 64, 67, 0.3), 0 .0625rem .1875rem .0625rem rgba(60, 64, 67, 0.15);
  }

  &_item {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    position: relative;
    height: 3.75rem;

    & > .order-card_long-field {
      align-content: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all 0.1s linear;
      width: 100%;
      min-height: 3.75rem;
      padding: 0.3125rem 0.5rem;

      &:focus,
      &:hover {
        overflow: visible;
        text-overflow: inherit;
        background-color: $secondary_color;
        position: absolute;
        left: auto;
        top: auto;
        min-height: 100%;
        white-space: unset;
        word-wrap: break-word;
        border-radius: 0.25rem;
        z-index: 100;

        box-shadow: inset .0625rem 0 0 #dadce0, inset -0.0625rem 0 0 #dadce0,
          0 .0625rem .125rem 0 rgba(60, 64, 67, 0.3),
          0 .0625rem .1875rem .0625rem rgba(60, 64, 67, 0.15);
      }
    }
  }

  &_name {
    flex-grow: 1;
    width: 18.75rem;
  }

  &_count {
    width: 120px;
    & > div {
      display: flex;
      align-items: center;
      gap: 1rem;
      height: 100%;
    }

    &-icon {
      width: 1.5rem;
      height: 1.5rem;
      fill: $black;
    }
    &-products {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &-number {
      font-size: 1.5rem;
    }
    &-text {
      font-size: .75rem;
    }
  }

  &_date {
    text-transform: capitalize;
    width: 9.375rem;
  }

  &_show-product {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $secondary_color;

    & svg {
      fill: $white;
    }

    &_wrapper {
      width: 2rem;
      height: 100%;
    }
  }
}
</style>
