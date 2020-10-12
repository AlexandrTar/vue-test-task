<template>
  <div class="course__tab">

      <div
          class="design"
          :style='{ backgroundImage: `url("${designImage}")` }'
      >
        <div class="design__content">


            <div class="content__title">
              <h2 class="title_h2">UI/UX design</h2>
              <p class="info">20 lessons</p>
            </div>

            <div class="content__time">
              <p class="info">2h 20min</p>
            </div>


            <div class="btn_content">
              <img src="@/assets/images/play.svg" alt="#">
            </div>

            <div class="photo_content">
              <img class="photo" src="@/assets/images/tab/Photo/photo_1.jpg" alt="#">
            </div>
          </div>

      </div>


      <div
          class="photography"
          :style='{ backgroundImage: `url("${photography}")` }'
      >
        <div class="design__content">


            <div class="content__title">
              <h2 class="title_h2">Photography</h2>
              <p class="info">12 lessons</p>
            </div>

            <div class="content__time">
              <p class="info">1h 30min</p>
            </div>


            <div class="btn_content">
              <img src="@/assets/images/play.svg" alt="#">
            </div>

            <div class="photo_content">
              <img class="photo" src="@/assets/images/tab/Photo/photo_2.jpg" alt="#">
            </div>

        </div>
      </div>

      <div
          class="animation"
          :style='{ backgroundImage: `url("${animation}")` }'

      >
        <div class="design__content">


            <div class="content__title">
              <h2 class="title_h2">Animation</h2>
              <p class="info">12 lessons</p>
            </div>

            <div class="content__time">
              <p class="info">2h 30min</p>
            </div>



            <div class="btn_content">
              <img src="@/assets/images/play.svg" alt="#">
            </div>

            <div class="photo_content">
              <img class="photo" src="@/assets/images/tab/Photo/photo_3.jpg" alt="#">
            </div>

        </div>
      </div>

  </div>
</template>

<script>
import designImage from '@/assets/images/tab/design.jpg'
import photography from '@/assets/images/tab/photography.jpg'
import animation from '@/assets/images/tab/animation.jpg'

export default {
name: "Tab-1",
  data() {
    return {
      designImage,
      photography,
      animation
    }
  }
}
</script>

<style lang="scss">
.course__tab {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 363px);
  grid-column-gap: 37px;
  grid-row-gap: 37px;
}
.design {
  grid-column: 1 / 4;
  grid-row: 1 / 2;

  background-size: 100%;
  border-radius: 10px;
  padding: 36px;
}
.photography {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background-size: 100%;
  border-radius: 10px;
  padding: 36px;
}
.animation {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  background-size: 100%;
  border-radius: 10px;
  padding: 36px;
}

.design__content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 85px;
}
.content__title {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.content__time {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
}
.btn_content {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}
.photo_content {
  grid-column: 3 / 4;
  grid-row: 3 / 4;
}
.photo {
  border-radius: 50%;
  border: 2px solid #fff;
}
.btn_content {
  height: 46px;
  width: 46px;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
}
.title_h2 {
  font-weight: 500;
  color: #fff;
  font-size: 24px;
}
.info, .content__time {
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, .8);
}
</style>
