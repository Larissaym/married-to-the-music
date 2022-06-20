<template>
  <div>

    <b-container fluid>

          <h1>Ateez Group Profile</h1>
      <div class="row">
        <div class="col-md"></div>
        <div class="col-md-7">
          <img class="group-picture" src="https://dazedimg-dazedgroup.netdna-ssl.com/900/azure/dazed-prod/1260/5/1265828.jpg" alt="cover">
        </div>
        <div class="col-md"></div>
      </div>

      <div class="row">
        <div class="col-md"></div>
        <div class="col-md-11">
          <!-- Rap / Composing -->
          <div class="row">
            <div class="col-md-12">
              <h3>Rap / Composing</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3" >
              <ul>
                <li v-for="subject in $store.getters.Rapper" :key="subject.name">{{ subject.name }}</li>
              </ul>
            </div>

            <div class="col-md-3">
              <ul>
                <li v-for="subject in $store.getters.Rapper" :key="subject.role">{{ subject.role }}</li>
              </ul>
            </div>

            <div class="col-md-3">
              <ul>
                <li v-for="subject in $store.getters.Rapper" :key="subject.geburtstag">{{ subject.geburtstag }}</li>
              </ul>
            </div>
            <div class="col-md-2">
              <ul>
                <li v-for="subject in $store.getters.Rapper" :key="subject.grösse">{{ subject.grösse }}</li>
              </ul>
            </div>
          </div>

          <!-- Vocalist -->
          <div class="row">
            <div class="col-md-12">
              <h3>Vocalist</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3" >
              <ul>
                <li v-for="subject in $store.getters.Vocalist" :key="subject.name">{{ subject.name }}</li>
              </ul>
            </div>

            <div class="col-md-3">
              <ul>
                <li v-for="subject in $store.getters.Vocalist" :key="subject.role">{{ subject.role }}</li>
              </ul>
            </div>

            <div class="col-md-3">
              <ul>
                <li v-for="subject in $store.getters.Vocalist" :key="subject.geburtstag">{{ subject.geburtstag }}</li>
              </ul>
            </div>
            <div class="col-md-2">
              <ul>
                <li v-for="subject in $store.getters.Vocalist" :key="subject.grösse">{{ subject.grösse }}</li>
              </ul>
            </div>
          </div>

          <!-- Performance / Dance -->
          <div class="row">
            <div class="col-md-12">
              <h3>Performance / Dance</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3" >
              <ul>
                <li v-for="subject in $store.getters.Performer" :key="subject.name">{{ subject.name }}</li>
              </ul>
            </div>

            <div class="col-md-3">
              <ul>
                <li v-for="subject in $store.getters.Performer" :key="subject.role">{{ subject.role }}</li>
              </ul>
            </div>

            <div class="col-md-3">
              <ul>
                <li v-for="subject in $store.getters.Performer" :key="subject.geburtstag">{{ subject.geburtstag }}</li>
              </ul>
            </div>
            <div class="col-md-2">
              <ul>
                <li v-for="subject in $store.getters.Performer" :key="subject.grösse">{{ subject.grösse }}</li>
              </ul>
            </div>
          </div>
          <div class="col-md"></div>
        </div>
      </div>

    </b-container>

  </div>
</template>

<style lang="scss" module>
ul {
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin-bottom: 50px !important;
}
li {
  margin: 0;
  padding: 20px 5px;
  text-align: center;
}
li:hover {
  background-color: rgba(0,0,0, 0.1);
}
img {
  width: 70% !important;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
}
</style>
