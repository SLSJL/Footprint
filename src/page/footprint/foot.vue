<template>
  <div class="g-container">
   <div class="f-list">
     <Input id="footKey" v-model="footKey" icon="ios-clock-outline" placeholder="请输入..."></Input>
     <div>
       <DatePicker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 100%"></DatePicker>
     </div>
     <ul>
       <li>
          <h3>三环路科创路口15号</h3>
          <p>10月21日 14:20</p>
       </li>
       <li>
         <h3>三环路科创路口15号</h3>
         <p>10月21日 14:20</p>
       </li>
       <li>
         <h3>三环路科创路口15号</h3>
         <p>10月21日 14:20</p>
       </li>
       <li>
         <h3>三环路科创路口15号</h3>
         <p>10月21日 14:20</p>
       </li>
       <li>
         <h3>三环路科创路口15号</h3>
         <p>10月21日 14:20</p>
       </li>
       <li>
         <h3>三环路科创路口15号</h3>
         <p>10月21日 14:20</p>
       </li>
       <li>
         <h3>三环路科创路口15号</h3>
         <p>10月21日 14:20</p>
       </li>       <li>
       <h3>三环路科创路口15号</h3>
       <p>10月21日 14:20</p>
     </li>       <li>
       <h3>三环路科创路口15号</h3>
       <p>10月21日 14:20</p>
     </li>       <li>
       <h3>三环路科创路口15号</h3>
       <p>10月21日 14:20</p>
     </li>

       <li>
         <h3>三环路科创路口15号</h3>
         <p>10月21日 14:20</p>
       </li>

     </ul>

   </div>
    <div class="map-container" id="map">

    </div>
  </div>
</template>


<script>
  import 'leaflet'
  import {BasemapLayer} from 'esri-leaflet'
  export default {
    name: 'footPrint',
    data () {
      return {
        footKey: ''
      }
    },
    mounted: function () {
      var map = L.map("map").setView([37.75, -122.23], 10);
      BasemapLayer("Topographic").addTo(map);
    },
    methods: {
      toggleClick () {
        if (this.spanLeft === 5) {
          this.spanLeft = 1
          this.spanRight = 23
        } else {
          this.spanLeft = 5
          this.spanRight = 19
        }
      }
    }
  }
</script>

