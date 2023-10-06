<template>
  <div id="app">
    <vue-headful
      title="John Louie Binas | Building Awesoness"
      description="I'm a Front End UI Designer who's knowledgeable and experienced in working with UX Designers and an enthusiast photographer"
      :image="$store.state.userImage"
    />
    <sidebar></sidebar>
    <body-content></body-content>
  </div>
</template>

<script>
import sidebar from "@/components/sidebar";
import bodyContent from "@/components/content";
export default {
  components: {
    sidebar,
    bodyContent,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap");
html,
body {
  background-color: #e5e4ea;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  line-height: 1.4;
}

#app {
  background-color: #fff;
  display: flex;
  min-height: 100vh;
  margin: 50px auto;
  max-width: 960px;
  overflow: hidden;
  border-radius: 10px;
}

h1,
h2,
h3,
h4,
h5,
h6,
.label {
  font-family: "Roboto Condensed", sans-serif;
}

.label {
  font-size: 18px;
}
</style>
