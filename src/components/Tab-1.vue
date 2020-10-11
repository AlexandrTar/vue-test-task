<template>
  <div class="course__tab">

    <div class="top">
      <div
          class="design"
          :style='{ backgroundImage: `url("${designImage}")` }'
      >
        <div class="design__content">

          <div class="content_top">

            <div class="content__title">
              <h2 class="title_h2">UI/UX design</h2>
              <p class="info">20 lessons</p>
            </div>

            <div class="content__time">
              <p class="info">2h 20min</p>
            </div>

          </div>

          <div class="content_bottom">

            <div class="btn_content">
              <img src="@/assets/images/play.svg" alt="#">
            </div>

            <div class="photo_content">
              <img class="photo" src="@/assets/images/tab/Photo/photo_1.jpg" alt="#">
            </div>
          </div>

        </div>

      </div>
    </div>

    <div class="bottom">
      <div
          class="photography"
          :style='{ backgroundImage: `url("${photography}")` }'
      >
        <div class="design__content">

          <div class="content_top">

            <div class="content__title">
              <h2 class="title_h2">UI/UX design</h2>
              <p class="info">20 lessons</p>
            </div>

            <div class="content__time">
              <p class="info">2h 20min</p>
            </div>

          </div>

          <div class="content_bottom">

            <div class="btn_content">
              <img src="@/assets/images/play.svg" alt="#">
            </div>

            <div class="photo_content">
              <img class="photo" src="@/assets/images/tab/Photo/photo_1.jpg" alt="#">
            </div>
          </div>

        </div>
      </div>

      <div
          class="animation"
          :style='{ backgroundImage: `url("${animation}")` }'

      >
        <div class="design__content">

          <div class="content_top">

            <div class="content__title">
              <h2 class="title_h2">UI/UX design</h2>
              <p class="info">20 lessons</p>
            </div>

            <div class="content__time">
              <p class="info">2h 20min</p>
            </div>

          </div>

          <div class="content_bottom">

            <div class="btn_content">
              <img src="@/assets/images/play.svg" alt="#">
            </div>

            <div class="photo_content">
              <img class="photo" src="@/assets/images/tab/Photo/photo_1.jpg" alt="#">
            </div>
          </div>

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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.top, .design {
  flex-basis: 100%;
  height: 363px;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 10px;
}

.content_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.design__content {
  color: #fff;
  padding: 31px;
}
.title_h2 {
  font-size: 24px;
  font-weight: 500;
}
.info {
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, .8);
}

.btn_content {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 46px;
  width: 46px;
  background: rgba(255, 255, 255, .3);
  border-radius: 6px;
  cursor: pointer;
}
.bottom {
  display: flex;
  flex-basis: 100% ;
  justify-content: space-between;
}

.content_bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 200px;
}

.photo {
  border-radius: 50%;
  border: 3px solid #fff;
}

.photography, .animation {
  flex-basis: 48%;
  height: 363px;

  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 10px;

  margin-top: 30px;
}

</style>
