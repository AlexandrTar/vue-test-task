<template>
  <div class="infoBlock">

    <div class="infoBlock__header">
      <img src="@/assets/images/tab/Photo/photo.jpg" alt="#">
        <div class="header__name">Alexa Rogue</div>
        <img class="arrow" src="@/assets/images/arrow.svg" alt="#">
    </div>

    <div class="infoBlock__progress">
      <div class="progress_title">Progress</div>
        <div>
          <div
              v-for="p in progressbars"
              :key="p.title"
              class="progressbar"
          >
          <div
              class="progressbar__image"
              :style="{background: p.imageBg}"
          >
            <img :src="require('@/assets/images/progress/' + p.image)" alt="#" class="image">
          </div>
          <div class="progressbar__title">
            <p class="title_p">{{p.title}}</p>
            <p class="subtitle_p">{{p.subtitle}}</p>
          </div>
          <div class="progressbar__progress">
            <div
                class="progress_all"
                :style="{background: p.progressAll}"
            >
              <div
                  class="progress_done"
                  :style="{width: p.progressDone, background: p.progressDoneBg}"
              >

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="infoBlock__task">
      <div class="tasks_title">Upcoming Task</div>
      <div class="task_content">

        <div class="task_image" style="background: #EEF2FD;">
          <img src="@/assets/images/discuss.svg" alt="#">
        </div>
        <div class="task_info">
          <div class="task_title">UI/UX - Discussion</div>
          <div class="task_subtitle">27 Oct 2020, Tuesday</div>
        </div>
      </div>

      <div class="task_content">

        <div class="task_image" style="background: #FFEFD6;">
          <img src="@/assets/images/cube.svg" alt="#">
        </div>
        <div class="task_info">
          <div class="task_title">Animation - 3D Animation</div>
          <div class="task_subtitle">27 Oct 2020, Tuesday</div>
        </div>
      </div>
    </div>

    <div
        class="infoBlock__download"
        :style='{ backgroundImage: `url("${downloadUrl}")` }'
    >

    </div>
  </div>
</template>

<script>
import downloadUrl from '@/assets/images/main/download.png'

export default {
name: "Info-block",
  data() {
    return {
      progressbars: [
        {imageBg: '#EEF2FD', image: 'progress_1.svg', title: 'UI/UX Design', subtitle: 'Advanced', progressAll: 'rgba(94, 129, 244, 0.2)', progressDone: '75px', progressDoneBg: '#5E81F4'},
        {imageBg: '#D5F5FB', image: 'progress_2.svg', title: 'Photography', subtitle: 'Intermediate', progressAll: 'rgba(12, 195, 231, 0.18)', progressDone: '35px', progressDoneBg: '#0CC3E7'},
        {imageBg: '#FFEFD6', image: 'progress_3.svg', title: 'Animation', subtitle: 'Advance', progressAll: 'rgba(255, 128, 139, 0.2)', progressDone: '60px', progressDoneBg: '#FFAE33'}
      ],
      downloadUrl
    }
  }
}
</script>

<style lang="scss">
@import "src/assets/style/style.scss";
.infoBlock__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px 0 0;
  cursor: pointer;
}
.header__name {
  font-weight: 500;
  font-size: 20px;
  color: $fontcolor;
  margin-left: 15px;
}

.infoBlock__progress {
  margin-top: 70px;
}
.progress_title {
  font-size: 18px;
  font-weight: 600;
}
.progressbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 31px;
}
.progressbar__image {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

  height: 48px;
  width: 48px;
}
.progressbar__title {
  margin-left: 19px;
  width: 140px;
}
.title_p {
  font-weight: 600;
  font-size: 16px;
  color: $fontcolor;
}
.subtitle_p {
  font-weight: 400;
  font-size: 14px;
  color: #83919E;
  margin-top: 4px;
}

.progress_all {
  width: 100px;
  height: 8px;
  border-radius: 21px;
}
.progress_done {
  height: 8px;
  border-radius: 21px;
}

.infoBlock__task {
  margin-top: 67px;
}
.task_image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border-radius: 6px;
}
.task_info {
  margin-left: 19px;
}
.tasks_title {
  font-size: 18px;
  font-weight: 600;
}
.task_title {
  font-size: 15px;
  font-weight: 600;
}
.task_subtitle {
  font-size: 14px;
  font-weight: 400;
  color: #83919E;
  margin-top: 4px;
}
.task_content {
  display: flex;
  margin-top: 31px;
}
.infoBlock__download {
  background-size: 100%;
  width: 312px;
  height: 232px;
  margin-top: 90px;
}

</style>
