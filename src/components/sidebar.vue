<template>
  <div class="sidebar">
    <div class="img-holder">
      <img :src="$store.state.userImage" alt="">
    </div>
    <about></about>
    <social :data="$store.state.social"></social>
    <education :data="$store.state.education"></education>
    <skills :data="$store.state.skills"></skills>
  </div>
</template>

<script>
import about from '@/components/aboutMe'
import social from '@/components/social'
import education from '@/components/education'
import skills from '@/components/skills'
export default {
  components: {
    about,
    social,
    education,
    skills
  },
}
</script>

<style lang="scss" scoped>
$class: '.sidebar';

#{$class} {
  width: $s-width;
  background-color: $theme-color;
  color: #fff;
  padding: $padding * 2;

  .img-holder {
    border-radius: 100%;
    overflow: hidden;
    width: 200px;
    height: 200px;
    margin: 0 auto;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>