<template>
<div class="search">
  <input
      type="text"
      placeholder="search"
      class="search__input"
      :style='{ backgroundImage: `url("${search}")` }'
  >
</div>
</template>

<script>
import SearchImg from '@/assets/images/Search.svg'

export default {
name: "Search",
  data() {
    return {
      search: SearchImg
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/style/style.scss";

.search {


  &__input {
    padding: 20px 365px 18px 63px;
    border-radius: 10px;
    border: none;
    font-weight: 400;
    color: $fontcolor;
    font-size: 15px;

    background-repeat: no-repeat;
    background-position: 23px center;
  }
}

</style>
