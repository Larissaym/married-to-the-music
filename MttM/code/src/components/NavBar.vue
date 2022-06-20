<template>
  <div>

    <div :class="$style.background">
      <div :class="$style.listUnstyled" id="nav" >
        <router-link to="/home" :class="$style.subList">Home</router-link>
        <router-link to="/news" :class="$style.subList">News</router-link>
        <router-link to="/podcast" :class="$style.subList">Podcast</router-link>
        <router-link :to="{name: 'about', params: {user: 'Married to the Music'}}" :class="$style.subList">Über </router-link>
      </div>
      <div :class="$style.title">{{ title }}</div>
      <div :class="$style.subtitle">{{ subtitle }}</div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Married to the Music',
      subtitle: 'Dein Kpop Podcast - jeden Montag für den besten Start in die Woche!',
      nav: [
        {
          'navTitle': 'Home'
        },
        {
          'navTitle': 'News'
        },
        {
          'navTitle': 'Podcast'
        },
        {
          'navTitle': 'Über uns'
        }
      ]
    }
  },
}
</script>

<style lang="scss" module>
.title {
  font-family: 'Garamond', serif;
  font-size: 45px;
  color: #FFBBEC;
  margin-top: 0;
  padding-top: 50px;
  text-align: center;
}
.subtitle {
  color: white;
  text-align: center;
}
.background {
  background-image: url('https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2531&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 0;
  margin-bottom: 60px;
  height: 300px;
}
.listUnstyled {
  margin: 0;
  list-style-type: none;
  color: white;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  background-color: rgba(0,0,0, 0.3);
}
.subList {
  margin: 0 50px;
  padding: 0 10px;
  float: left;
  color: white !important;
}
.subList:hover {
  color: #FFBBEC !important;
}
.router-link-exact-active, .router-link-active {
  color: #FFBBEC !important;
}
</style>
