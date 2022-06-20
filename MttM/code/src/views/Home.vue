<template>
  <div>
<!--    <h1>HOME</h1>-->
    <MusicVideoNews/>
    <ArtistOfTheWeek/>
    <MembersList/>
  </div>
</template>

<script>

/* Import all components */
import MusicVideoNews from '../components/MusicVideoNews'
import ArtistOfTheWeek from '../components/ArtistOfTheWeek'
import MembersList from '../components/MembersList'

export default {
  components: {
    MusicVideoNews,
    ArtistOfTheWeek,
    MembersList
  },
}
</script>

<style lang="scss">
//demo-03
//Import of global-style
@import '../styles/global';
</style>
