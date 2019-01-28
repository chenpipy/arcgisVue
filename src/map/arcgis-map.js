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


    gridMap.getView2D = () => {
      return view2D
    }
    gridMap.getView3D = () => {
      return view3D
    }
    function getFullscreen(options){
      return  new Fullscreen(options);
    }



    gridMap.initView2D = initView2D
    gridMap.initView3D = initView3D
    gridMap.getLayer = getLayer
    gridMap.getFullscreen = getFullscreen

    resolve(gridMap)
    //funciton end
  })
})

export default loadMap
