<template>
    <div class="section_featured">
        <div class="post">
            <div class="inner">
                <p class="tit">Featured Posts</p>
                <SwiperFeatured/>
            </div>
            <div class="inner">
                <p class="tit">Related Posts</p>
                
            </div>
        </div>
    </div>
</template>

<script>
import SwiperFeatured from '@/components/SwiperFeatured.vue'
export default {
    components: {
        SwiperFeatured
    }
}
</script>

<style scoped>
    .section_featured .inner {margin: 0 0 83px;}
</style>