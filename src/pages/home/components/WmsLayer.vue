<template>
    <div>
        dajsfdaskfjadlksfjadslk;
    </div>
</template>

<script>
    import loadMap from '@/map/arcgis-map'
    export default {
        name: "WmsLayer",
        methods: {
            createMap() {
                loadMap.then((gridMap) => {
                    this.gridMap = gridMap;
                    gridMap.initView3D('viewDiv');
                    this.view3D = gridMap.getView3D();
                    let layer = gridMap.getLayer('MapImageLayer', {
                        url: 'http://192.168.31.12:6080/arcgis/rest/services/ChinaMapService/chinaMapService/MapServer'
                    })
                    // this.view3D.map.add(layer);
                    this.view3D.when(() => {
                        //添加全图的控件
                        let fullscreen = gridMap.getFullscreen()
                        this.view3D.ui.add(fullscreen, 'top-right')

                        this.view3D.on('drag', (e) => {

                        });

                    })
                    //取消所有的widget
                    // this.view3D.ui.components=[]
                    //添加高程
                    this.view3D.map.ground = 'world-elevation';
                    //此处证明findLayerById无法找到ground.layers中的图层
                    // console.log(this.view3D.map.findLayerById("worldElevation"))  // undefind

                })
            },
            resetDir(type) {
                this.gridMap.viewControl(this.view3D,type)
            }
        }
    }
</script>

<style scoped>

</style>