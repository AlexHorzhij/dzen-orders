<template>
  <div class="product-card">
    <div class="product-card_status-marker"></div>
    <div class="product-card_image-wrapper">
      <img
        :src="product.photo"
        :alt="product.type"
        class="product-card_image"
      />
    </div>

    <div class="product-card_name product-card_item">
      <div class="product-card_long-field">
        <div class="product-card_name-title">{{ product.title }}</div>
        <div class="product-card_name-serial">
          SN-{{ product.serialNumber }}
        </div>
      </div>
    </div>
    <div class="product-card_count product-card_item"></div>
    <div class="product-card_item product-card_date-wrapper">
      <div class="product-card_long-field">
        <div class="product-card_date">
          <span>c</span>
          <span>&#160;{{ transformDateFormat(product.guarantee.start) }}</span>
          <span>по</span>
          <span>&#160;{{ transformDateFormat(product.guarantee.end) }}</span>
        </div>
      </div>
    </div>
    <div class="product-card_is-new product-card_item">
      <div class="product-card_long-field">{{ isNewText }}</div>
    </div>
    <div class="product-card_price product-card_item">
      <div class="product-card_long-field">
        <div class="product-card_price product-card_price-first">
          <span>{{ getPriceByPriority[0].value }}</span>
          <span>{{ getPriceByPriority[0].symbol }}</span>
        </div>
        <div class="product-card_price product-card_price-second">
          <span>{{ getPriceByPriority[1].value }}</span>
          <span>{{ getPriceByPriority[1].symbol }}</span>
        </div>
      </div>
    </div>
    <div class="product-card_type product-card_item">
      <div class="product-card_long-field">
        {{ product.type }}
      </div>
    </div>
    <div class="product-card_owner product-card_item">
      <div class="product-card_long-field">ХЗ Кто</div>
    </div>
    <div v-if="productproduct" class="product-card_product product-card_item">
      <div class="product-card_long-field">
        {{ productproduct.title }}
      </div>
    </div>
    <div class="product-card_product-date product-card_item">
      <div class="product-card_long-field">
        {{ transformDateWithMonth(product.date) }}
      </div>
    </div>
    <div class="product-card_delete-btn product-card_item">
      <delete-button />
    </div>
  </div>
</template>

<script>
import { getDate, getDateWithTextMonth } from "@/helpers/getDate";
import DeleteButton from "@/components/reusable/DeleteButton.vue";

export default {
  name: "AppProductItem",
  components: { DeleteButton },
  data() {
    return {
      productOrder: null,
    };
  },
  props: {
    product: Object,
  },
  created() {
    this.productOrder = this.$store.state.orders.find(
      (item) => item.id === this.product.order
    );
  },
  computed: {
    productTitle() {
      return this.product.title;
    },
    isNewText() {
      return this.product.isNew ? "новый" : "Б / у";
    },
    getPriceByPriority() {
      const arr = [];

      this.product.price.forEach((item) => {
        arr[item.isDefault] = {
          value: item.value,
          symbol: this.getCurrencySymbol(item.symbol),
        };
      });
      return arr;
    },
  },
  methods: {
    transformDateWithMonth(date) {
      const d = getDateWithTextMonth(date);
      return d;
    },
    transformDateFormat(date) {
      const d = getDate(date);
      return d;
    },
    getCurrencySymbol(currency) {
      return currency === "USD" ? "$" : currency;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.product-card {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background: $white;

  border-top: 0.0625rem solid $secondary_color;
  border-bottom: 0.0625rem solid $secondary_color;
  color: $secondary_text;

  &:hover {
    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
      0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
  }

  &_status-marker {
    width: 0.625rem;
    height: 0.625rem;
    background: $yellow;
    border-radius: 50%;
    margin-right: 0.75rem;
    margin-left: 0.75rem;
    flex-shrink: 0;
  }

  &_image {
    width: 4rem;
    height: 2rem;
    flex-shrink: 0;

    &-wrapper {
      width: 5rem;
      height: 100%;
      align-content: center;
    }
  }

  &_item {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    position: relative;
    height: 3.75rem;

    & > .product-card_long-field {
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
    width: 12.5rem;
  }

  &_date {
    display: grid;
    grid-template-columns: 1.25rem auto;
    flex-shrink: 0;
    width: 9.375rem;

    &-wrapper {
      width: 9.375rem;
    }
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

  &_type {
    width: 12.5rem;
  }

  &_owner {
    width: 12.5rem;
  }

  &_order {
    width: 12.5rem;
  }

  &_product-date {
    text-transform: capitalize;
    width: 9.375rem;
  }

  &_delete-btn {
    margin-right: 20px;
  }
}
</style>
