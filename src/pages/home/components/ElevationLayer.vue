<template>
  <div class="eleMap" style="height: 100%;">
    <div id="viewDiv">
      <div class="map-control">
        <div class="widget">
          <span @click="resetDir()" class="compass" title="重置罗盘方向"><i class="iconfont icon-navigation__e"></i></span>
        </div>

        <div class="widget">
          <span class="compass" title="重置罗盘方向"><i class="iconfont icon-rot"></i></span>
        </div>

        <div class="widget">
          <span class="compass" title="重置罗盘方向"><i class="iconfont icon-ziyuan"></i></span>
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
        gridMap:null,
      }
    },
    mounted () {
      this.createMap()
    },
    methods: {
      createMap () {
        loadMap.then((gridMap)=>{
          this.gridMap=gridMap;
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

            this.view3D.on('drag',(e)=>{

            });

          })
          //取消所有的widget
          // this.view3D.ui.components=[]
          //添加高程
          this.view3D.map.ground='world-elevation';
          //此处证明findLayerById无法找到ground.layers中的图层
          // console.log(this.view3D.map.findLayerById("worldElevation"))  // undefind

        })
      },
      resetDir(){
        this.gridMap.rotateView(this.view3D,0)
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
  .map-control{
    position: absolute;
    bottom:50px;
    right:50px;
    display: flex;
    flex-direction:column;
  }
  .map-control .widget{
    position:relative;
    width:30px;
    height:30px;
    background: aliceblue;
    border-radius: 15px;
    margin-top: 10px;
  }
  .map-control .widget .compass{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%) rotate(-45deg);
  }
  .map-control .widget .compass i{
    font-size: 20px;
    color:cadetblue;
    padding:5px;
  }
  .map-control .widget i:hover{
    cursor: pointer;
    color: #14abff;
  }
</style>
