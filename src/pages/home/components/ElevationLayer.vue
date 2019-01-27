<template>
  <div class="eleMap" style="height: 100%;">
    <div id="viewDiv"></div>
  </div>
</template>

<script>
  import * as esriLoader from 'esri-loader'
  import { arcgisConfig } from '@/config/map-config'
  export default {
    name: 'basemap',
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
        // 引入依赖
        esriLoader.loadModules([
          'esri/Map',
          'esri/views/MapView'
        ], {url: window.arcgis.config.baseUrl}).then(([Map, MapView]) => {
          this.map = new Map({
            basemap: 'streets'
          })
          this.view = new MapView({
            container: 'viewDiv',
            center: [121.27189573730267, 30.8419595372876],
            zoom: 3,
            map: this.map
          })


        })
      }
    }
  }
</script>

<style scoped>
  @import url('http://localhost:8080/arcgis_js_api/library/4.10/esri/css/main.css');

  #viewDiv {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
</style>
