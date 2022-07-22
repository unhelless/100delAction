<template>
  <section class="section" id="sect1">
    <div class="wrap-title">
      <div class="title">
        <h1 class="title-section">Как участвовать?</h1>
        <div class="text_description">
          Больше зарегистрированных чеков — больше шансов получить подарки!
        </div>
      </div>
      <div class="img-title shadow-rad_blue" >
        <img src="~@/assets/image/products/umbrella.svg" alt="">
      </div>
    </div>
    <div class="wrap-items shadow-rad">
      <div class="item">
        <div class="item-text">
        <span class="number">
          01
        </span>
          <div class="text_description">
            В период с 25.07.2022 по 21.08.2022 покупайте товары
            в магазинах 100Дел и Стройка на сумму от 3000 рублей
          </div>
        </div>
      </div>
      <div class="item">

        <div class="item-text">
        <span class="number">
          02
        </span>
          <div class="text_description">
            Зарегистрируйте Ваш чек на сайте stroika-100del.ru
            и примите участие в одном из 4х еженедельных розыгрышей.
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-text">
        <span class="number">
          03
        </span>
          <div class="text_description">
            22.08.2022 года все чеки зарегистрированные в период
            акции примут участие в ГРАНДФИНАЛЕ от Makita,
            где мы разыграем призы
          </div>
        </div>
        <div class="item-img">
          <div class="wrap_img">
            <img src="~@/assets/image/products/cabel.svg" class="img-line" alt="">
            <div class="text-img_description">
            </div>
          </div>
          <div class="wrap_img">
            <div class="img">
              <img src="~@/assets/image/products/kosilka.svg" alt="">
            </div>
            <div class="text-img_description">
              Триммер аккумуляторный LXT 18В 2в1 триммер / кромкорез
            </div>
          </div>
          <div class="wrap_img" >
            <div class="img">
              <img src="~@/assets/image/products/makita_3.svg" alt="">
            </div>
            <div class="text-img_description">
              Вентилятор аккумуляторный LXT 18В, 180мм, 3 скорости
            </div>
          </div>
          <div class="wrap_img" >
            <div class="img">
              <img src="~@/assets/image/products/makita_2.svg" alt="">
            </div>
            <div class="text-img_description">
              Кофеварку аккумуляторную CXT 12В max / LXT 18В
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap-button">
      <a class="btn-orange btns" href="#form" @click.prevent="linkedForm" ref="link_form">Зарегистрировать чек</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionComponent3",
  methods:{

    linkedForm(event){
      console.log(this.$refs);
      const blockID = this.$refs.link_form.getAttribute('href').substr(1)
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  margin-top: 354px;

  .wrap-title {
    display: flex;
    position: relative;

    .title {
      .title-section {
        position: relative;
        z-index: 2;
      }

      .text_description {
        position: relative;
        z-index: 2;
        margin-top: 32px;
        font: 48px/58px 'Stolz Light';
        width: 70%;
      }

      @media (max-width: 768px) {
        .text_description {
          width: 100%;
          text-align: center;
          font: 28px/38px 'Stolz Light';
        }
      }
    }

    .img-title {
      position: absolute;
      z-index: 1;
      right: -130px;
      top: -200px;
      max-width: 850px;

      img {
        position: relative;
        z-index: 2;
        width: 100%;
      }

      @media (max-width: 1476px) {
        max-width: 550px;
        &.shadow-rad_blue:before {
          top: 70px;
        }
      }
    }
  }

  .wrap-items {
    display: flex;
    flex-wrap: wrap;
    margin: -24px;
    margin-top: 88px;
    position: relative;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .item {
      display: flex;
      justify-content: space-between;
      position: relative;
      z-index: 2;

      .item-img {
        display: flex;
        flex: 1 0 69%;
        justify-content: space-between;

        .img-line {
          max-width: 300px;
          min-width: 250px;
          width: 100%;
        }

        .wrap_img {
          max-width: 200px;
          margin: 0 10px;
          width: auto;

          &:nth-child(1) {
            max-width: unset;
          }

          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          .text-img_description {
            font: 16px/19px 'Stolz Light';
            margin-top: 20px;
          }
        }

        img, .img {
          max-width: 196px;
          width: 100%;
        }

        img {
          transform: rotate(15deg);
        }
      }

      .item-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      flex: 0 0 35%;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(4px);
      border-radius: 48px;
      padding: 32px 48px;
      margin: 24px;
      @media (max-width: 1476px) {
        flex: 1 1 0;
        &:nth-child(3) {
          height: max-content;
        }
      }
      @media (max-width: 768px) {
        border-radius: 16px;
      }

      .number {
        font: 64px/77px 'Stolz';
      }

      .text_description {
        font: 24px/29px 'Stolz Light';
      }

      &:nth-last-child(1) {
        flex: 1 1 100%;
      }

      @media (max-width: 1146px) {
        &:nth-child(3) {
          flex-direction: column;

          .wrap_img {
            &:nth-child(1) {
              display: none;
            }
          }
        }
      }
      @media (max-width: 768px) {
        .item-img {
          flex-direction: column;
          flex: 1;

          .wrap_img {
            flex-direction: row;
            margin: unset;
            max-width: unset;
            align-items: flex-end;
            justify-content: space-between;

            .img {
              max-width: 156px;
              width: 100%;
              margin-right: 10px;
            }

            .text-img_description {
              width: 100%;
            }
          }
        }
      }
      @media (max-width: 448px) {
        padding: 17px;
        margin-top: 20px;
        margin-bottom: 0;
        .item-text {
          .number {
            font: 24px/29px 'Stolz';
          }

          .text_description {
            font: 14px/17px 'Stolz Light';
          }
        }
        .item-img .wrap_img {
          margin-top: 30px;

          .img {
            display: flex;
            justify-content: center;
          }

          img {
            width: 100px;
          }

          .text-img_description {
            font: 14px/17px 'Stolz Light';
          }
        }
      }

      &:nth-child(3) {
        .item-text {
          flex: 0 0 31%;
        }
      }
    }
  }
  .wrap-button{
    margin: 72px 0 0;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      margin: 54px 0 0;
    }
    .btns{
      position: relative;
      z-index: 1;
      font:24px/29px 'Stolz Light';
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 448px) {
        font:15px/18px 'Stolz Light';
      }
    }
  }
  .shadow-rad {
    overflow: unset;

    &:before {
      width: 280px;
      height: 280px;
      top: 400px;
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
    right: 0;
    top: 260px;
  }
}
</style>