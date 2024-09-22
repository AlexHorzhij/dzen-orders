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
      <div class="header_date">
        <div class="header_weekDay">
          {{ getWeekDay }}
        </div>
        <div class="header_date-time">
          <span> {{ getDate }}</span>

          <span v-if="hour">
            <clock-icon class="header_time_icon" /><span
              >{{ hour }}:{{ min }}</span
            ></span
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { io } from "socket.io-client";
import { monthNameShort } from "../helpers/date.js";
const {
  format,
  getMonth,
  getDate,
  getYear,
  getHours,
  getMinutes,
} = require("date-fns");
import { ru } from "date-fns/locale";

import ClockIcon from "../assets/icons/ClockIcon";
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  name: "AppHeader",
  components: { ClockIcon },
  data() {
    return {
      hour: null,
      min: null,
    };
  },

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
  beforeCreate() {
    setInterval(() => {
      const date = Date.now();
      const hour = getHours(date);
      const min = getMinutes(date);
      this.hour = hour;
      this.min = min;
    }, 1000);
  },
  computed: {
    getWeekDay() {
      return format(Date.now(), "EEEE", { locale: ru });
    },
    getDate() {
      const date = Date.now();
      const month = monthNameShort[getMonth(date)];
      const day = getDate(date);
      const year = getYear(date);

      return `${day} ${month}, ${year}`;
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/variables.scss";

.header {
  &_search {
    width: 300px;
    background-color: var(--bg-light);

    &::placeholder {
      font-weight: bold;
    }
  }

  &_connection-count {
    font-weight: 700;
  }

  &_date {
    font-size: 0.75rem;
    font-weight: 500;

    &-time {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;

      & > span {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  &_time_icon {
    width: 14px;
    height: 14px;
    margin-right: 4px;
  }

  &_weekDay {
    text-transform: capitalize;
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
