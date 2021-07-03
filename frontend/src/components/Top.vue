<template>
    <div class="top">
        <div class="w1160">
            <div class="titWrap">
                <p class="tit">Blog</p>
                <p class="sub">개발자 이승민 기술 블로그 방문을 환영합니다11.</p>
                <p class="sub">좋은 개발자로 거듭나는 그 날까지! 기술과 노하우를 공유해보아요 :)</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll (event) {
            alert("스크롤 감지");
        }
    }
}
</script>


<style scoped>
    .top {background-image:url(../assets/images/intro_blog.png);}
    .top .w1160 {width:1160px; height: 474px; margin:0 auto; padding:220px 0 0;}
    .top .w1160 .titWrap {color:#fff;}
    .top .w1160 .titWrap .tit {line-height: 67px; font-size:56px;}
    .top .w1160 .titWrap .sub {font-size:18px; margin:11px 0 0;}
</style>
