<template>
  <div class="eleMap" style="height: 100%;">
    <div id="viewDiv"></div>
  </div>
</template>

<script>
  import loadMap from '@/map/arcgis-map'
  export default {
    name: 'basemap',
    data () {
      return {
        view2D: null,
      }
    },
    mounted () {
      this.createMap()
    },
    methods: {
      createMap () {
        loadMap.then((gridMap)=>{
          console.log(gridMap.data)
          gridMap.initView2D('viewDiv');
          this.view2D=gridMap.getView2D();

          let layer=gridMap.getLayer('MapImageLayer',{
            url:'http://192.168.31.12:6080/arcgis/rest/services/ChinaMapService/chinaMapService/MapServer'
          })
          this.view2D.map.addLayer(layer)

        })
      }
    }
  }
</script>

<style scoped>

  #viewDiv {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
</style>
