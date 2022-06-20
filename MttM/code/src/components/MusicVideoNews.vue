<template>
  <div>

    <h1 v-if="false"> {{ SpecialAnnouncement }}</h1>
    <h1 v-else="true"> {{ ArticleTitle }}</h1>
    <div :class="$style.centerContent">
      <div :class="$style.musicVideoArticle" v-for="(MusicVideo) in MusicVideos">
        <img :alt="MusicVideo.caption" v-bind:src='MusicVideo.img'/>
        <div v-show="true" v-html="MusicVideo.title"></div>
        <p v-show="true" v-text="MusicVideo.description"></p>
        <a :href="MusicVideo.link.url" :target="MusicVideo.link.target" v-text="MusicVideo.link.linkText"/>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      ArticleTitle: 'Aktuell',
      SpecialAnnouncement: 'Diesen Freitag keine neue Folge!',
      MusicVideos: [
        {
          img: 'https://i.ytimg.com/vi/7bn4qX9Aj_E/maxresdefault.jpg',
          caption: 'Cover',
          // v-text
          description: 'Ateez beliebtestes Lied des Konzertes ist nun Live - und wir schauen uns das Video genauer an, nächsten Freitag! Freut euch auf ein Exlusivinterview mit der Redaktion, welche Live dabei war!',
          // v-html
          title: '<h2><strong>Ateez</strong> »Take me Home«</h2>',
          // v-bind
          link: {
            url: 'https://www.youtube.com/watch?v=LXQeW9vbHiY',
            target: '_blank',
            linkText: 'Jetzt Video anschauen'
          }
        },
        {
          img: 'https://img.kpopmap.com/680x384/2021/10/ERIC-Nam-Tour-_cover-image.jpg',
          caption: 'Cover',
          // v-text
          description: 'Eric Nam kommt am 11 Juni 2022 nach Zürich. Im Komplex 457 tritt er auf und unsere Redaktion wir wieder Live mit dabei sein! Sie dir nochmals sein neustes Lied an bevor das Konzert losgeht!',
          // v-html
          title: '<h2><strong>Eric Nam</strong> – Live in Zürich</h2>',
          // v-bind
          link: {
            url: 'https://www.youtube.com/watch?v=33RG5xAmc98',
            target: '_blank',
            linkText: 'Jetzt Video anschauen'
          }
        },
        {
          img: 'https://blog.ticketmaster.de/wp-content/uploads/2021/12/kpop-flex-festival-frankfurt-2022-stadion-termine-karten-738x415.jpg',
          caption: 'Cover',
          // v-text
          description: 'Das erste KPop Festival in Europa, zwei Tage und ganz viele Artists. Das Highlight unserer Redaktion – Oneus kommt ebenfalls. Wir berichten Live an beiden Tagen und halten euch auf dem laufenden.',
          // v-html
          title: '<h2><strong>KPop Flex</strong> – in Frankfurt am Main</h2>',
          // v-bind
          link: {
            url: 'https://www.youtube.com/watch?v=fmgHsn4IZi4',
            target: '_blank',
            linkText: 'Jetzt Video anschauen'
          }
        }
      ]
    }
  },
}
</script>

<style lang="scss" module>
img {
  width: 100%;
}
.centerContent {
  display: flex;
  justify-content: center;
}
.musicVideoArticle {
  width: 25%;
  margin: 0 30px 60px 30px;
  float: left;
}
</style>
