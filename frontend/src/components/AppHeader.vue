<template>
  <nav class="navbar navbar-light bg-light container">
    <div class="container-fluid text-dark">
      <div class="navbar-brand logo">Inventory</div>
      <form class="d-flex">
        <input
          class="form-control me-2 bg-light header_search"
          type="search"
          placeholder="Поиск"
          aria-label="Search"
        />
      </form>
      <div>
        Сейчас на сайте:
        <span class="header_connection-count">{{ connectionCount }}</span>
      </div>
      <top-menu />
    </div>
  </nav>
</template>

<script>
import { io } from "socket.io-client";

import { TopMenu } from "@/components/reusable/index";
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  name: "AppHeader",
  components: { TopMenu },

  setup() {
    const socket = io.connect(process.env.VUE_APP_SERVER_URL);
    const connectionCount = ref("");

    onMounted(() => {
      window.addEventListener("beforeunload", () => {
        socket.emit("manual-disconnect");
        socket.disconnect();
      });

      socket.on("connect", (data) => {
        connectionCount.value = data;
      });

      socket.on("message", (data) => {
        connectionCount.value = data.text;
      });
    });

    onBeforeUnmount(() => {
      socket.emit("manual-disconnect");
      socket.disconnect();
    });

    return {
      connectionCount,
    };
  },
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";

.header {
  &_search {
    width: 18.75rem;
    background-color: var(--bg-light);

    &::placeholder {
      font-weight: bold;
    }
  }

  &_connection-count {
    font-weight: 700;
  }
}

.navbar > div > .logo {
  color: $main_accent;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
}
</style>
