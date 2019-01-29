<template>
  <div class="eleMap" style="height: 100%;">
    <div id="viewDiv">
      <div class="full-screen" id="full-screen">
        <div class="esri-ui">
          <div class="esri-component esri-compass esri-widget--button esri-widget esri-interactive" role="button" tabindex="0" aria-label="重置罗盘仪方向" title="重置罗盘仪方向"><span aria-hidden="true" class="esri-compass__icon esri-icon-compass" style="transform: rotateZ(0deg);"></span><span class="esri-icon-font-fallback-text">重置罗盘仪方向</span></div>

        </div>
      </div>
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
            //添加全图的控件
            let fullscreen=gridMap.getFullscreen()
            this.view3D.ui.add(fullscreen,'top-right')
          })
          //取消所有的widget
          // this.view3D.ui.components=[]
          //添加高程
          this.view3D.map.ground='world-elevation';
          //此处证明findLayerById无法找到ground.layers中的图层
          // console.log(this.view3D.map.findLayerById("worldElevation"))  // undefind

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
