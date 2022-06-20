<template>
  <div>

    <h1> {{ articleTitle }}</h1>
    <div class="row">
      <div class="col-md"></div>
      <div class="col-md-5">
        <img alt="portrait" v-bind:src='img'>
      </div>
      <div class="col-md-5">
        <h3> {{ fullName }} </h3>
        <a @click="overlayOn()">Erfahre ein Geheimnis...</a>
      </div>
      <div class="col-md"></div>
    </div>

    <div id="overlay" @click="overlayOff()">
      <div id="text">
        YES - wir bekommen ein exklusives Interview mit dem Main Dancer von ONEUS!
        <br/>
        <br/>
        Sei gespannt was dich erwartet!
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      articleTitle: 'Künstler der Woche',
      firstName: 'Hwan Woong',
      lastName: 'Yeo',
      band: 'ONEUS',
      img: 'https://dbkpop.com/wp-content/uploads/2019/09/oneus_fly_with_us_Hwanwoong-2000x1333.jpg'
    }
  },
  computed: {
    fullName() {
      return `${this.lastName} ${this.firstName} – ${this.band}`
    }
  },
  methods: {
    overlayOn() {
      document.getElementById("overlay").style.display = "block";
      this.index = n;
    },
    overlayOff() {
      document.getElementById("overlay").style.display = "none";
    },
  },
}
</script>

<style lang="scss" scoped>
h3 {
  text-align: left;
  margin-bottom: 20px;
}
#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.8);
  z-index: 2;
  cursor: pointer;
}

#text{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40%;
  font-size: 20px;
  font-family: 'Garamond', sans-serif;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
}
</style>
