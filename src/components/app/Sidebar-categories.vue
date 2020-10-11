<template>
  <div>
    <div
        class="sidebar-categories"
        v-for="category in categories"
        :key="category.url"
    >

      <router-link
          :to="'/' + category.url"
          tag="div"
          class="category"
          exact-active-class="active"
      >
          <img :src="require('@/assets/images/' + category.image)" class="category__image">
          <p class="category__text">{{category.title}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
name: "Sidebar-categories",
  data() {
    return {
      categories: [
        {title: 'Dashboard', image: 'image_1.svg', url: 'dashboard'},
        {title: 'All courses', image: 'image_2.svg', url: ''},
        {title: 'Resources', image: 'image_3.svg', url: 'resources'},
        {title: 'Friends', image: 'image_4.svg', url: 'friends'},
        {title: 'Chats', image: 'image_5.svg', url: 'chats'},
        {title: 'Settings', image: 'image_6.svg', url: 'settings'}
      ],
      set: '/settings'
    }
  }
}
</script>

<style lang="scss">
.sidebar-categories {
  position: relative;
  margin-left: 60px;
  margin-top: 46px;

}
.category {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 6px 0;
  margin-top: 41px;
  color: #8DA1B5;

  border-right: 3px solid #fff;
  cursor: pointer;

  &__text{
    margin-left: 26px;
  }
}
.active {
  color: #272829;
  border-right: 3px solid #5E81F4;
}

</style>
