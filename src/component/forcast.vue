<template>
  <div>
    <headerHtml v-bind:current="city"/>  
    <div class="main">
      <div class="detail">
        <ul>
          <li class="item" v-for="(item, index) in list" v-bind:key="index" >
            <div class="itemTop stripeBlue">
              <div class="icon">
                <img v-bind:src="'http://openweathermap.org/img/wn/'+item.weather[0].icon+'.png'" alt="">
              </div>
              <div class="date">
                {{item.dt_txt.split(' ')[0]}}
                <p class="time">{{item.dt_txt.split(' ')[1].substring(0,5)}}</p>
              </div>
            </div>
            <div class="itemBottom">
              <div class="info temperature">{{Math.floor(item.main.temp - 273.15)}}˚</div>

              <div class="info minMax">
                <div class="icon">
                  <img src="https://image.flaticon.com/icons/svg/76/76660.svg" alt="">
                </div>
                <div class="gap">
                  <p>min <span>{{Math.floor(item.main.temp_min - 273.15)}}</span></p>
                  <p>max <span>{{Math.floor(item.main.temp_max - 273.15)}}</span></p>
                </div>
              </div>
              <div class="info">
                <div class="icon">
                  <img src="https://image.flaticon.com/icons/svg/219/219816.svg" alt="">
                </div>
                <div class="humidity">
                  <p> {{ item.rain ? Math.round(item.rain['3h']*100)/100 : 0}} mm</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="chart">
        <div id="container" ></div>
      </div>
    </div>
  </div>    
</template>
<script>

import '../assets/css/forcast.css'
import headerHtml from '../template/header.vue'
import chart from '../assets/js/graph';

import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'forcast'
  ,data(){
    return { city: this.$route.query.id }
  }
  ,computed:{
    ...mapState({
      list : 'cityForcastList'
    })
  }
  ,created(){  
    const params = this.$route.query;
    this.$store.dispatch('callForcastByCity',params).then(()=>{
      chart.init(); 
      chart.render( this.$store.state.cityForcastList );
    });
  },components:{
    headerHtml
  }
  
}
</script>

<style>
</style>
