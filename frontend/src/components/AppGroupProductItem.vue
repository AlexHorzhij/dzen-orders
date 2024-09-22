<template>
  <div class="group-product">
    <div class="group-product_status-marker"></div>
    <div class="group-product_image-wrapper">
      <img
        :src="product.photo"
        :alt="product.type"
        class="group-product_image"
      />
    </div>
    <div class="group-product_name group-product_item">
      <div class="order-card_long-field">
        <div>{{ product.title }}</div>
        <div>{{ product.serialNumber }}</div>
      </div>
    </div>
    <div class="group-product_status-text">Свободен</div>
    <div class="group-product_delete-btn">
      <delete-button />
    </div>
  </div>
</template>

<script>
import DeleteButton from "./reusable/DeleteButton.vue";

export default {
  name: "AppGroupProductItem",
  components: { DeleteButton },
  props: {
    product: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.group-product {
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 100%;
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

  &_name {
    flex-grow: 1;
  }

  &_status-text {
    color: $yellow;
  }

  &_delete-btn {
    margin: 0 2rem;
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
}
</style>
