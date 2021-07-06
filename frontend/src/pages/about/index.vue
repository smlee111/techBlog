<template>
  <div class="section_featured">
    <div class="about">
      <h1>about</h1>
      <line-chart></line-chart>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart'

export default {
  name: 'VueChartJS',
    components: {
        LineChart
    },
}
</script>

<style scoped>
</style>