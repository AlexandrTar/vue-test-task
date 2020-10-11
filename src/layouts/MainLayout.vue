<template>
  <div class="main-layout">
    <div class="sidebar">

      <div class="sidebar__logo">
        <div class="logo_image">O</div>
        <h1 class="logo_text">Ohara</h1>
      </div>

      <div class="sidebar__btn">
        <button class="btn join">Join a course</button>
      </div>
      <sidebar-categories />
      <div class="sidebar__upgrade">
        <div
            class="sidebar__upgrade_item"
            :style='{ backgroundImage: `url("${upgrade}")` }'
        >
          <button class="btn upgrade">Upgrade</button>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import SidebarCategories from '@/components/app/Sidebar-categories'
import upgradeUrl from '@/assets/images/main/upgrade.png'

export default {
name: "mainLayout",
  components: {
    SidebarCategories
  },
  data() {
    return {
      upgrade: upgradeUrl
    }
  }
}
</script>

<style lang="scss">
@import "./src/assets/style/style.scss";

.main-layout {
  display: flex;
}
.sidebar {
  position: relative;
  width: 272px;
  height: 100vh;
  background: #fff;

  &__logo {
    margin-top: 61px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__upgrade  {
    height: 272px;
    width: 192px;
    display: flex;
    margin: 53px 40px 0px 40px;
  }
}
  .logo_image {
    height: 48px;
    width: 48px;
    background: $btnbg;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Playfair Display';
    font-weight: 700;
    font-size: 24px;
    color: #fff;
  }
  .logo_text {
    font-weight: 600;
    color: $btnbg;
    font-size: 22px;
    margin-left: 16px;
  }

  .sidebar__btn {
    display: flex;
    justify-content: center;

    margin-top: 48px;
  }

  .join {
    padding: 16px 39px;
  }

  .sidebar__upgrade_item {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .upgrade {
    margin-top: 180px;
    padding: 16px 44px;
    font-size: 16px;
  }
</style>
