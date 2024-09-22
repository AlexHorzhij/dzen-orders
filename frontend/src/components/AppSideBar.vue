<template>
  <div class="side-bar">
    <div class="side-bar_user-avatar">
      <div class="side-bar_user">
        <img src="../../public/user_photo.webp" class="side-bar_user-photo" />
      </div>
      <div class="side-bar_user-settings"><settings-button /></div>
    </div>
    <nav class="nav nav-pills flex-column mb-auto">
      <RouterLink to="/orders" class="nav-link">Приход</RouterLink>
      <RouterLink to="/groups" class="nav-link">Группы</RouterLink>
      <RouterLink to="/products" class="nav-link">Продукты</RouterLink>
      <div class="nav-link">Пользователи</div>
      <div class="nav-link">Настройки</div>
    </nav>
  </div>
</template>

<script>
import { SettingsButton } from "./reusable";

export default {
  name: "AppSideBar",
  components: { SettingsButton },
};
</script>

<style lang="scss">
@import "../scss/variables.scss";

.side-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12.5rem;
  z-index: 20;
  background: #fff;
  height: 100%;
  padding-top: 5rem;

  -webkit-box-shadow: 0.625rem 0.125rem 1.0625rem 0.3125rem
    rgba(207, 216, 220, 1);
  -moz-box-shadow: 0.625rem 0.125rem 1.0625rem 0.3125rem rgba(207, 216, 220, 1);
  box-shadow: 0.625rem 0.125rem 1.0625rem 0.3125rem rgba(207, 216, 220, 1);

  &_user {
    position: relative;
    width: 9.375rem;
    height: 9.375rem;
    margin-bottom: 3.125rem;
    border-radius: 50%;
    overflow: hidden;

    &-settings {
      position: absolute;
      width: 3rem;
      height: 3rem;
      color: red;
      border-radius: 50%;
      z-index: 200;
      bottom: 0;
      right: 0;
    }

    &-avatar {
      position: relative;
      width: 9.375rem;
      height: 9.375rem;
    }

    &-photo {
      object-fit: cover;
      height: 100%;
    }
  }

  & .nav-link {
    color: $main_text;
    font-weight: 500;
    width: 100%;
    cursor: pointer;

    &:hover {
      box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
        0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
    }
  }

  & > .nav {
    align-items: center;
    gap: 1rem;
    text-transform: uppercase;

    & > .router-link-active {
      background-color: transparent;
      text-decoration: underline;
      text-decoration-color: $secondary_accent;
      text-underline-offset: 0.25rem;
      color: $main_text;

      &:hover {
        box-shadow: none;
      }
    }
  }
}
</style>
