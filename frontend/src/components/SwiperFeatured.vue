<template>
  <swiper
    :slides-per-view="3"
    :space-between="16"
    :navigation="true"
    :autoplay='{
      "delay": 2500,
      "disableOnInteraction": false
    }'
    class="featuredSwiper"
  >
    <swiper-slide>
      <div class="top"></div>
      <div class="box">
        <p class="sub">FE개발자의 성장 스토리 09 : Offscreencanvas 적용기</p>
        <p class="txt">
          안녕하세요. FE플랫폼팀에서 전사 에디터 및 웹용 사진 편집기를 개발하고 있는 darcy입니다.&nbsp; 최근에 웹용 사진 편집기(이하 포토스)의 성능 개선을 위해 Web worker1를 도입할 수 있는 방안을 조사하고 팀 내 공유하는 자리를 가졌습니다.&nbsp; 포토스는 다음 카페, 티스토리 등에서 사용하고 있는 웹용 사진 편집기입니다. 사용자가 글을 작성할 때&nbsp; 사진을 첨부한 후, 해당 사진에 효과를 주고 사이즈를 조절하는 등 […]
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="top"></div>
      <div class="box">
        <p class="sub">FE개발자의 성장 스토리 09 : Offscreencanvas 적용기</p>
        <p class="txt">
          안녕하세요. FE플랫폼팀에서 전사 에디터 및 웹용 사진 편집기를 개발하고 있는 darcy입니다.&nbsp; 최근에 웹용 사진 편집기(이하 포토스)의 성능 개선을 위해 Web worker1를 도입할 수 있는 방안을 조사하고 팀 내 공유하는 자리를 가졌습니다.&nbsp; 포토스는 다음 카페, 티스토리 등에서 사용하고 있는 웹용 사진 편집기입니다. 사용자가 글을 작성할 때&nbsp; 사진을 첨부한 후, 해당 사진에 효과를 주고 사이즈를 조절하는 등 […]
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="top"></div>
      <div class="box">
        <p class="sub">FE개발자의 성장 스토리 09 : Offscreencanvas 적용기</p>
        <p class="txt">
          안녕하세요. FE플랫폼팀에서 전사 에디터 및 웹용 사진 편집기를 개발하고 있는 darcy입니다.&nbsp; 최근에 웹용 사진 편집기(이하 포토스)의 성능 개선을 위해 Web worker1를 도입할 수 있는 방안을 조사하고 팀 내 공유하는 자리를 가졌습니다.&nbsp; 포토스는 다음 카페, 티스토리 등에서 사용하고 있는 웹용 사진 편집기입니다. 사용자가 글을 작성할 때&nbsp; 사진을 첨부한 후, 해당 사진에 효과를 주고 사이즈를 조절하는 등 […]
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="top"></div>
      <div class="box">
        <p class="sub">FE개발자의 성장 스토리 09 : Offscreencanvas 적용기</p>
        <p class="txt">
          안녕하세요. FE플랫폼팀에서 전사 에디터 및 웹용 사진 편집기를 개발하고 있는 darcy입니다.&nbsp; 최근에 웹용 사진 편집기(이하 포토스)의 성능 개선을 위해 Web worker1를 도입할 수 있는 방안을 조사하고 팀 내 공유하는 자리를 가졌습니다.&nbsp; 포토스는 다음 카페, 티스토리 등에서 사용하고 있는 웹용 사진 편집기입니다. 사용자가 글을 작성할 때&nbsp; 사진을 첨부한 후, 해당 사진에 효과를 주고 사이즈를 조절하는 등 […]
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import SwiperCore, { Navigation, Autoplay } from 'swiper/core';

  import 'swiper/swiper.scss';
  import "swiper/components/navigation/navigation.min.css"

  SwiperCore.use([Navigation, Autoplay]);

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
          
          
      };
    },
    methods: {
      
    }
    
  }
</script>

<style scoped>
  .swiper-slide {height: 450px; background: #ccc;}
  .swiper-slide .top {height: 156px; background: #000;}
  .swiper-slide .box {padding: 34px 32px 32px;}
  .swiper-slide .box .sub {line-height: 32px; color: #111; font-size: 20px; font-weight: 500; letter-spacing: .8;}
  .swiper-slide .box .txt {display: inline-block; width: 100%; max-height: 78px; line-height: 26px; color: #111; font-size: 16px; font-weight: 400; letter-spacing: .8; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; white-space: normal; text-align: left; word-wrap: break-word; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; margin: 12px 0 0;}
  .swiper-button-prev {top: 0;left: 0;}
</style>