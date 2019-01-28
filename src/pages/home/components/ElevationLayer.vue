<template>
  <div class="eleMap" style="height: 100%;">
    <div id="viewDiv">
      <div class="full-screen" id="full-screen"></div>
    </div>

  </div>
</template>

<script>
  import loadMap from '@/map/arcgis-map'
  export default {
    name: 'basemap',
    data () {
      return {
        view2D: null,
        view3D:null,
      }
    },
    mounted () {
      this.createMap()
    },
    methods: {
      createMap () {
        loadMap.then((gridMap)=>{
          gridMap.initView3D('viewDiv');
          this.view3D=gridMap.getView3D();
          let layer=gridMap.getLayer('MapImageLayer',{
            url:'http://192.168.31.12:6080/arcgis/rest/services/ChinaMapService/chinaMapService/MapServer'
          })
           // this.view3D.map.add(layer);
          this.view3D.when(()=>{

            let fullScreenPs={
              element:'a',
              view:this.view3D,
            }
            let fullscreen=gridMap.getFullscreen()
            this.view3D.ui.add(fullscreen,'top-right')
          })
        })
      }
    }
  }
</script>

<style scoped>

  #viewDiv {
    position: relative;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
  #viewDiv .full-screen{
    position: absolute;
    top:50px;
    right:50px;
    width:30px;
    height: 30px;
    background-color: rgba(255,0,0,0.5);
  }
</style>
