<template>
  <div class="products">
    <div class="products_header">
      <h2 class="products_title">Продукты / {{ products?.length }}</h2>

      <form>
        <div class="form-group">
          <label for="type">Тип: </label>
          <input
            type="text"
            class="form-control"
            id="type"
            placeholder="Поиск по типу"
            @input="findByType"
          />
        </div>
        <div class="form-group">
          <label for="specification">Спецификация:</label>
          <input
            type="text"
            class="form-control"
            id="specification"
            placeholder="Поиск по спецификации"
            @input="findBySpecifications"
          />
        </div>
      </form>
    </div>

    <ul v-if="showProducts" class="products_list">
      <li
        v-for="product of showProducts"
        :key="product.id"
        class="products_item"
      >
        <app-product-item :product="product" />
      </li>
    </ul>
  </div>
</template>

<script>
import AppProductItem from "@/components/AppProductItem.vue";

export default {
  name: "AppProductsPage",
  components: { AppProductItem },
  data() {
    return { products: null, filteredByType: null, filteredBySpec: null };
  },
  created() {
    this.products = this.$store.state.products;
  },
  computed: {
    showProducts() {
      const f1 = this.filteredByType;
      const f2 = this.filteredBySpec;

      if (f1 && f2) {
        return f1.filter((value) => f2.includes(value));
      } else if (f1 || f2) {
        return f1 || f2;
      } else {
        return this.products;
      }
    },
  },
  methods: {
    findByType(e) {
      const filter = e.target.value.toLowerCase();
      if (filter) {
        this.filteredByType = this.products.filter((item) =>
          item.type.toLowerCase().includes(filter)
        );
      } else {
        this.filteredByType = null;
      }
    },
    findBySpecifications(e) {
      const filter = e.target.value.toLowerCase();

      if (filter) {
        this.filteredBySpec = this.products.filter((item) =>
          item.specification.toLowerCase().includes(filter)
        );
      } else {
        this.filteredBySpec = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.products {
  &_list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem 0;
    overflow-x: scroll;
  }

  &_title {
    font-size: 1.5rem;
    font-weight: 500;
  }

  &_item {
    width: fit-content;
  }

  &_header {
    display: flex;
    gap: 2.5rem;
  }

  & .form-group {
    display: flex;
    align-items: center;
    gap: 1.875rem;
  }
}

form {
  display: flex;
  gap: 1.25rem;
}
</style>
