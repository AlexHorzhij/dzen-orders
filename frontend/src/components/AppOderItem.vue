<template>
  <div class="order-card">
    <div class="order-card_name order-card_item">
      <div class="order-card_long-field">
        {{ order.title }}
      </div>
    </div>
    <div class="order-card_count order-card_item">
      <div class="order-card_long-field">
        <list-icon class="order-card_count-icon" />
        <div class="order-card_count-products">
          <div class="order-card_count-number">{{ order.products.length }}</div>
          <div class="order-card_count-text">Продукта</div>
        </div>
      </div>
    </div>
    <div class="order-card_date order-card_item">
      <div class="order-card_long-field">
        {{ transformDateWithMonth(order.date) }}
      </div>
    </div>
    <div class="order-card_price order-card_item">
      <div class="order-card_long-field">
        <div class="order-card_price order-card_price-first">
          <span>100</span>
          <span>$</span>
        </div>
        <div class="order-card_price order-card_price-second">
          <span>2600</span>
          <span>UAH</span>
        </div>
      </div>
    </div>
    <div class="order-card_delete-btn">
      <delete-button />
    </div>
  </div>
</template>

<script>
import { getDateWithTextMonth } from "@/helpers/getDate";
import DeleteButton from "@/components/reusable/DeleteButton.vue";
import ListIcon from "@/assets/icons/ListIcon.vue";

export default {
  name: "AppOrderItem",
  components: { DeleteButton, ListIcon },
  props: {
    order: Object,
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

.order-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  height: 100%;
  background: $white;

  border-top: 0.0625rem solid $secondary_color;
  border-bottom: 0.0625rem solid $secondary_color;

  &:hover {
    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
      0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
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
        background-color: $white;
        position: absolute;
        left: auto;
        top: auto;
        min-height: 100%;
        white-space: unset;
        word-wrap: break-word;
        border-radius: 0.25rem;
        z-index: 100;

        box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
          0 1px 2px 0 rgba(60, 64, 67, 0.3),
          0 1px 3px 1px rgba(60, 64, 67, 0.15);
      }
    }
  }

  &_name {
    flex-grow: 1;
    width: 25rem;
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
      width: 24px;
      height: 24px;
      fill: $black;
    }
    &-products {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &-number {
      font-size: 24px;
    }
    &-text {
      font-size: 12px;
    }
  }

  &_date {
    text-transform: capitalize;
    width: 9.375rem;
  }

  &_is-new {
    width: 6.25rem;
  }

  &_price {
    width: 7.5rem;
    flex-direction: column;

    & span:first-child {
      margin-right: 0.3125rem;
    }
    &-first {
      font-size: 0.75rem;
    }

    &-second {
      & span:last-child {
        font-size: 0.75rem;
      }
    }
  }

  &_delete-btn {
    margin-right: 20px;
  }
}
</style>
