import * as esriLoader from 'esri-loader'
import {arcgisConfig} from '@/config/map-config'

arcgisConfig()
let loadMap = new Promise((resolve) => {
  esriLoader.loadModules([
      'esri/Map',
      'esri/config',
      'esri/views/MapView',
      'esri/views/SceneView',
      'esri/layers/MapImageLayer',
      'esri/geometry/Extent',
    "esri/widgets/Fullscreen"
    ], {url: window.arcgis.config.baseUrl}
  ).then(([Map, esriConfig, MapView, SceneView, MapImageLayer , Extent,Fullscreen]) => {
    let gridMap = {}
    let view2D
    let view3D

    //获取图层
    function getLayer (layerType, options) {
      if (!options.hasOwnProperty('url')) {
        return null
      }
      if (layerType === 'MapImageLayer') {
        return new MapImageLayer({
          url: options.url
        })
      }
    }

    function initView2D (el) {
      view2D = new MapView({
        container: el,
        map: new Map({
          basemap: 'streets'
        }),
        zoom: 5,
        center: [121, 28],
      })
    }

    function initView3D (el) {
      view3D = new SceneView({
        container: el,
        map: new Map({
          basemap: 'satellite'
        }),
        zoom: 5,
        center: [121, 28],
      })
    }

    //获取2D视图
    function getView2D() {
      return view2D

    }
    //获取3D视图
    function getView3D() {
      return view3D
    }

    function getFullscreen(options){
      return  new Fullscreen(options);
    }
    //视图控制
    function viewControl(view,type){
      if(!view || !type) return null;
      switch(type){
        case 'pan':
          view.inputManager.primaryDragAction = "pan";
          break;
        case 'rotate':
          view.inputManager.primaryDragAction = "rotate";
          break;
        case 'compass':
          // var angle=options.angle || 0
          view.goTo({
            heading:0
          })
          break;
      }
    }

    gridMap.initView2D = initView2D  //初始化2D视图
    gridMap.initView3D = initView3D  //初始化2D视图
    gridMap.getLayer = getLayer      //获取图层
    gridMap.getFullscreen = getFullscreen   //全屏
    gridMap.getView2D=getView2D
    gridMap.getView3D=getView3D

    gridMap.viewControl=viewControl   //旋转视图

    resolve(gridMap)
    //funciton end
  })
})

export default loadMap
