<template>
  <div class="courses">
    <div class="courses__main">

      <div class="courses__main_searchBlock">
        <Search />
        <div class="searchBlock_img">
          <img class="bell" src="@/assets/images/bell.svg" alt="#">
        </div>
      </div>

      <div class="courses__main_title">
        <div class="title_h1">
          <h1>All courses</h1>
        </div>

        <div class="title_tabs">
          <div
              v-for="tab in tabs"
              :key="tab.title"
          >
            <router-link
                :to="tab.path"
                tag="div"
                class="tab"
                exact-active-class="tabActive"
                :exact="tab.exact"
            >
              {{tab.title}}
            </router-link>
          </div>
        </div>
      </div>

      <div class="courses__main_content">
          <router-view />
      </div>

    </div>
    <div class="courses__info">
      <div class="courses__info_content">
        <info-block />
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search"
import InfoBlock from "@/components/Info-block"


export default {
name: "Courses",
  components: {InfoBlock, Search},
  data() {
    return {
      tabs: [
        {title: 'Tab 1', path: '/tab_1'},
        {title: 'Tab 2', path: '/tab_2'},
        {title: 'Tab 3', path: '/tab_3'}
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./src/assets/style/style.scss";

.courses {
  display: flex;
  width: 100%;
  background: $mainbg;

  &__main {
    flex-basis: 80%;
    margin: 40px;

    &_searchBlock {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &_title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 47px;
      margin-bottom: 36px;
    }
  }

  &__info {
    flex-basis: 20%;
    height: 100%;
    background: #fff;
  }
}
.bell {
  cursor: pointer;
}
.title_tabs {
  display: flex;
}
.tab {
  margin-left: 78px;
  padding-bottom: 6px;
  font-weight: 600;
  font-size: 17px;
  color: #768492;
  border-bottom: 2px solid $mainbg;
  cursor: pointer;
}
.tabActive {
  border-bottom: 2px solid $btnbg;
  color: $btnbg;
}

.courses__info {
  padding: 40px;
}

</style>
