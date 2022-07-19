<template>
  <section class="section">
    <h1 class="title-section">
      Что можно выбрать?
    </h1>
    <div class="wrap-items">
      <div  class="item">
        <div class="item-text">
          <div class="text-title">
            <span>
              4
            </span>
            приза
          </div>
          <div class="text-description">
            по 100 000 рублей
          </div>
        </div>
        <div class="item-img img img-left shadow-rad_blue ">
          <img src="~@/assets/image/products/termos.svg" alt="" >
        </div>
      </div>
      <div data-aos="fade-down" data-aos-duration="900" class="item">
        <div class="item-img img img-mobile-rigth">
          <img src="~@/assets/image/products/makita_3.svg" alt="">
        </div>
        <div class="item-text">
          <div class="text-title">
            <span>
              400
            </span>
            подарков от Makita
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="500" class="item">
        <div class="item-text">
          <div class="text-description">
            4 сертификата по
          </div>
          <div class="text-title">
            <span>
              50 000
            </span>
            рублей на покупки в сети магазинов
          </div>
        </div>
        <div class="item-img img img-mobile-left">
          <img src="~@/assets/image/products/porfel.png" alt="">
        </div>
      </div>
      <div data-aos="fade-down" data-aos-duration="900" class="item">
        <div class="item-img img img-right shadow-rad_blue">
          <img src="~@/assets/image/products/alisa.png" alt="">
        </div>

        <div class="item-text">
          <div class="text-title">
            12 умных колонок
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionComponent2",
}
</script>

<style lang="scss" scoped>
.section {
  margin-top: 150px;
  @media(max-width: 768px){
    margin-top: 96px;
  }
  .title-section {
    font: 700 96px/110% 'Stolz Bold';
    text-transform: uppercase;
    width: 70%;
    @media (max-width: 1280px) {
      font: 700 76px/110% 'Stolz Bold';
    }
    @media(max-width: 768px){
      font: 56px/110% 'Stolz Bold';
      text-align: center;
      width: 100%;
    }
    @media (max-width: 448px) {
      font: 24px/26px 'Stolz Bold';
    }
  }

  .wrap-items {
    display: flex;
    justify-content: space-between;
    margin: 64px -12px 0 -12px;
  }

  .item {
    min-width: 257px;
    max-width: 530px;
    text-align: center;

    &-text {
      .text-title {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;

        & span {
          font: 128px/153px 'Stolz';
        }

        font: 48px/57px 'Stolz';
      }

      .text-description {
        font: 24px/29px 'Stolz Light';
      }

      @media (max-width: 1290px) {
        .text-title {
          font: 38px/47px 'Stolz';

          & span {
            font: 88px/103px 'Stolz';
          }
        }
      }
      @media(max-width: 768px){

        .text-title {
          & span {
            font: 68px/103px 'Stolz';
          }
        }
      }

      @media(max-width: 448px){
        .text-title {
          font: 22px/26px 'Stolz';
          & span {
            font: 58px/69px 'Stolz';
          }
        }
        .text-description {
          font: 14px/17px 'Stolz Light';
        }
      }
    }

    @media (max-width: 1290px) {
      min-width: 200px;
    }

    &:nth-child(1) {
      .item-text {
        .text-description {
          margin-top: 15px;
        }
      }

      @media (max-width: 1290px) {
        min-width: 170px;
      }
    }

    &:nth-child(2) {
      margin-top: 100px;
      max-width: 257px;
    }

    &:nth-child(3) {
      .item-text {
        .text-description {
          margin-bottom: 24px;
        }
      }
    }

    &:nth-child(4) {
      max-width: 257px;
    }

    @media (max-width: 1280px) {
      & img {
        width: 80%;
      }
    }

  }

  .img-left {
    position: absolute;
    left: 0px;

    & img {
      position: relative;
      z-index: 1;
    }

    @media (max-width: 1280px) {
      left: -50px;
    }
  }

  .img-right {
    position: relative;
    right: -100px;
    bottom: 250px;

    & img {
      position: relative;
      z-index: 1;
    }
  }

  @media (max-width: 930px) {
    .wrap-items {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: unset;
      position: relative;
    }
    .item {
      min-width: unset;
      max-width: unset;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-top: 112px;
      .item-text{
        max-width: 400px;
      }
      &:nth-child(2) {
        margin-top: 112px;
        max-width: unset;
        .item-text{
          max-width: 200px;
        }
      }
      &:nth-child(1) {
        .text-title{
          &:nth-child(1) {
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
        }
      }

      &:nth-child(4) {
        max-width: unset;
        .item-text{
          width: 200px;
        }
      }

    }

    .text-title {
      & span {
        margin-right: 8px;
      }
    }
    .img{
      max-width: 300px;
      min-width: 133px;
      width: 100%;
      position: absolute;
      &.img-mobile-rigth{
        right: 10px;
        top: 240px;
        width: max-content;
        height: max-content;
      }
      &.img-mobile-left{
        left: -100px;
        top: 370px;
        width: max-content;
        height: max-content;
      }
      &.img-left{
        bottom: -90px;
      }
      &.img-right{
        bottom:-90px;
      }
    }
  }
  @media(max-width: 548px){
    .img{
      max-width: 250px;
      min-width: 133px;
      width: 100%;
      position: absolute;
      &.img-mobile-rigth{
        right: -70px;
        top: 10px;
        width: max-content;
        height: max-content;
      }
      &.img-mobile-left{
        left: -100px;
        top: 270px;
        width: 200px;
        height: max-content;
      }
      &.img-left{
        bottom: -90px;
        max-width: 160px;
      }
      &.img-right{
        bottom: 20px;
        max-width: 200px;
      }
    }
  }
}

.shadow-rad_blue:before {
  border-radius: 100%;
  content: "";
  width: 280px;
  height: 280px;
  opacity: 0.7;
  position: absolute;
  z-index: 0;
  background: radial-gradient(50% 50% at 50% 50%, #6D388D 0%, rgba(99, 41, 134, 0.5) 36.98%, rgba(91, 34, 130, 0.44) 100%);
  box-shadow: 20px 20px 420px 300px rgb(99 41 134 / 50%);
  mix-blend-mode: color-dodge;
}

.img-left.shadow-rad_blue:before {
  left: -100px;
  top: 100px;
  @media (max-width: 930px) {
    width: 130px;
    height: 130px;
    box-shadow: 20px 20px 420px 200px rgb(99 41 134 / 50%);
  }
}

.img-right.shadow-rad_blue:before {
  right: -100px;
  top: 100px;
}
</style>