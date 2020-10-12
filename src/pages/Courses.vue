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
            <div :class="{tabActive: currentView === `${tab.link}`}"
                 class="tab"
                 @click="switchView(`${tab.link}`)"
            >
              {{tab.title}}
            </div>
          </div>
        </div>
      </div>

      <div class="courses__main_content">
          <component :is="currentView"></component>
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
import tab1 from '@/components/Tab-1'
import tab2 from '@/components/Tab-2'
import tab3 from '@/components/Tab-3'


export default {
name: "Courses",
  components: {InfoBlock, Search, tab1, tab2, tab3},
  data() {
    return {
      currentView: 'tab1',
      tabs: [
        {title: 'Tab 1', link: 'tab1'},
        {title: 'Tab 2', link: 'tab2'},
        {title: 'Tab 3', link: 'tab3'},
      ]
    }
  },
  methods: {
    switchView(view) {
      this.currentView = view
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
  color: $btnbg;
}
.tabActive:after {
  content: "";
  background-color: $btnbg;
  height: 2px;
  width: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 6px 0 0 30%;

}

.courses__info {
  padding: 40px;
}


</style>
