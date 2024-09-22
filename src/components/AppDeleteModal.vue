<template>
  <div>
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="deleteModalLabel">Удаление</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h2>Вы действительно хотиье удалить приход:</h2>
            <div>{{ order.title }}</div>
            <div>И все находящиеся в нем товары?</div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Отменить
            </button>
            <button
              @click="$emit('delete')"
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppDeleteModal",
  props: {
    order: Object,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 600;
  color: red;
}

h2 {
  font-weight: 600;
}
</style>
