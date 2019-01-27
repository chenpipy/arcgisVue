import * as esriLoader from 'esri-loader'
import {arcgisConfig} from '@/config/map-config'

arcgisConfig()
let loadMap=new Promise((resolve)=>{
  esriLoader.loadModules([
      'esri/Map',
      'esri/config',
      'esri/views/MapView',
      'esri/layers/MapImageLayer',
      'esri/geometry/Extent',
    ], {url: window.arcgis.config.baseUrl}
  ).then(([Map, esriConfig, MapView, MapImageLayer, Extent]) => {
    let gridMap = {}
    let view2D
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
        container:el,
        map: new Map(),
        zoom: 5,
        center: [121, 28],
        basemap:'streets'
      })
    }

    gridMap.initView2D = initView2D
    gridMap.getLayer = getLayer
    gridMap.getView2D = () => {
      return view2D
    }
    gridMap.data=1
    resolve(gridMap)
    //funciton end
  })
})

export default loadMap
