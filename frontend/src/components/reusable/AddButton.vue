<template>
  <button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-plus-circle-fill add_btn"
      viewBox="0 0 16 16"
    >
      <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"
      />
    </svg>
  </button>
</template>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.add_btn {
  stroke: transparent;
  fill: $main_accent;
  width: 2rem;
  height: 2rem;
  box-sizing: content-box;
  border: 1px solid rgb(26, 184, 26);
  border-radius: 50%;

  -webkit-box-shadow: 0px 0px 2px 2px rgb(34, 182, 34);
  -moz-box-shadow: 0px 0px 2px 2px rgb(26, 184, 26);
  box-shadow: 0px 0px 2px 2px rgb(25, 200, 25);
}
</style>
