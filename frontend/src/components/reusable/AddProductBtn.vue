<template>
  <button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-plus-circle-fill add-product-btn"
      viewBox="0 0 16 16"
    >
      <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"
      />
    </svg>
    <span class="add-product-btn_text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: "AddProductBtn",
  props: {
    text: {
      type: String,
      default: "Добавить продукт",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.add-product-btn {
  stroke: transparent;
  fill: $main_accent;
  width: 1.75rem;
  height: 1.75rem;
  box-sizing: content-box;
  border-radius: 50%;

  &_text {
    color: $main_accent;
    margin-left: 0.625rem;
  }
}
</style>
