/*
arcgis初始化配置
*/
export function arcgisConfig () {
  window.arcgis = {
    config: {
      proxyUrl: 'api/init.js',
      baseUrl: 'api/init.js',
      dojoUrl: 'api/dojo',
      offlineMapWkid: 4326,
      getBaseUrl: function () {
        return this.baseUrl
      },
      getDojoUrl: function () {
        return this.dojoUrl
      },
      getWkid: function () {
        return this.offlineMapWkid
      }
    }
  }
}
