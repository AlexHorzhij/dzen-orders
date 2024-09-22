<template>
  <div class="header_date">
    <div class="header_date_weekDay">
      {{ getWeekDay }}
    </div>
    <div class="header_date-time">
      <span> {{ getDate }}</span>

      <span v-if="hour">
        <clock-icon class="header_date_time_icon" /><span
          >{{ hour }}:{{ min }}</span
        >
      </span>
    </div>
  </div>
</template>

<script>
const {
  format,
  getMonth,
  getDate,
  getYear,
  getHours,
  getMinutes,
} = require("date-fns");
import { ru } from "date-fns/locale";
import { monthNameShort } from "@/helpers/date.js";

import { ClockIcon } from "@/assets/icons";

export default {
  name: "TopMenu",
  components: { ClockIcon },
  data() {
    return {
      hour: null,
      min: null,
    };
  },
  beforeCreate() {
    setInterval(() => {
      const date = Date.now();
      const hour = getHours(date);
      const min = getMinutes(date);
      this.hour = hour.toString().padStart(2, 0);
      this.min = min.toString().padStart(2, 0);
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

<style lang="scss" scoped>
.header_date {
  font-size: 0.75rem;
  font-weight: 500;

  &-time {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &_time_icon {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.25rem;
  }

  &_weekDay {
    text-transform: capitalize;
  }
}
</style>
