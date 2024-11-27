<script setup lang="ts">
import Map from '@arcgis/core/Map.js'
import SceneView from '@arcgis/core/views/SceneView.js'

onMounted(() => {
  // if (process) {

  // }
  const view = new SceneView({
    // An instance of Map or WebScene
    map: new Map({
      //   basemap: 'hybrid',
    }),

    // The id of a DOM element (may also be an actual DOM element)
    container: 'viewDiv',
  })

  view.when(() => {
    if (process.client) {
      window.alert('??')
    }
  })
})
</script>

<template>
  <div id="viewDiv" />
</template>

<style scoped>
#viewDiv {}
</style>
