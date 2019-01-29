<template>
  <div class="eleMap" style="height: 100%;">
    <div id="viewDiv"></div>
  </div>
</template>
<script>
  import * as esriLoader from 'esri-loader'
  import {arcgisConfig} from '@/config/map-config'  //不要用mapConfig来命名，不统一
  export default {
    name: 'imageLayer',
    data () {
      return {
        map: null,
        view: null
      }
    },
    mounted () {
      this.createMap()
    },
    methods: {
      arcgisConfig: arcgisConfig,
      createMap () {
        this.arcgisConfig()
        esriLoader.loadModules([
            'esri/Map',
            'esri/config',
            'esri/views/MapView',
            'esri/layers/MapImageLayer',
            'esri/geometry/Extent',
          ], {url: window.arcgis.config.baseUrl}
        ).then(([Map, esriConfig, MapView, MapImageLayer, Extent]) => {
          esriConfig.request.corsEnabledServers.push('http://192.168.31.12:6080')//设置地图服务器已允许跨域
          var layer = new MapImageLayer({
            id:'001',
            url: 'http://192.168.31.12:6080/arcgis/rest/services/ChinaMapService/chinaMapService/MapServer'
          })

          this.map = new Map({
            basemap: 'streets'
          })
          this.view = new MapView({
            container: 'viewDiv',
            center: [121.27189573730267, 30.8419595372876],
            zoom: 3,
            map: this.map
          })
          this.map.add(layer)
          console.log(this.map.findLayerById('001'))

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
