<script setup lang="ts">
import Map from '@arcgis/core/Map.js'
import MapView from '@arcgis/core/views/MapView'
import SceneView from '@arcgis/core/views/SceneView.js'
// import Button from 'primevue/button'

onMounted(() => {
  const sceneView = new SceneView({
    map: new Map({
      basemap: 'hybrid',
    }),
    container: 'viewDiv',
  })

  sceneView.when(() => {
    if (import.meta.client) {
      // console.log('??')
    }
  })

  const view = new MapView({
    container: 'mapViewDiv',
    map: new Map({
      basemap: 'topo-vector',
    }),
    zoom: 4,
    center: [15, 65],
    constraints: {
      minZoom: 3, // 最小縮放級別
      maxZoom: 10, // 最大縮放級別
      rotationEnabled: false, // 禁用旋轉
    },
  })

  // view.when(() => {
  //   console.log('init')
  // })
})
</script>

<template>
  <div class="w-full h-full">
    <Button label="Submit" />
    <div id="viewDiv" />
    <div id="mapViewDiv" />
  </div>
</template>

<style scoped>
#viewDiv {
  width: 100%;
  height: 100%;
}

#mapViewDiv {
  width: 100%;
  height: 100%;
  max-height: 500px;
}
</style>
