<template>
  <section class="purchase-section">
    <span class="shadow-rad"></span>
    <div class="purchase">
      <h1 class="purchase-title">Совершай покупки от 3000 рублей</h1>
      <div class="purchase-text">
        И участвуй в еженедельном розыгрыше призов
      </div>
      <div class="purchase-btns">
        <a class="btns btn-orange" href="#sect1" ref="link_form">Хочу участвовать</a>
        <a class="btns btn-linear" href="#form" ref="link_form">Зарегистрировать чек</a>
      </div>
    </div>
    <div class="purchase-wrap_images">
      <!--      Подумать над реализацией картинок-->
      <img src="~@/assets/image/products/kosilka.png" alt="" class="item-img kosilka anim-show">
      <img src="~@/assets/image/products/makita_2.png" alt="" class="item-img makita anim-show">
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionComponent1",
  methods:{
    linkedForm(event){
      console.log(this.$refs);
      const blockID = this.$refs.link_form.getAttribute('href').substr(1)
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      history.pushState('', document.title, window.location.pathname);
    }
  }
}
</script>

<style lang="scss" scoped>

//1 блок
.purchase-section {
  height: 968px;
  display: flex;
  padding-top: 80px;
  overflow: hidden;

  .purchase {
    max-width: 1320px;
    position: relative;
    z-index: 2;

    &-title {
      font: 112px/110% 'Stolz Bold';
      text-transform: uppercase;
    }

    &-text {
      font: 48px/58px "Stolz Light";
      margin-top: 96px;
      margin-bottom: 56px;
      width: 67%;
    }

    &-btns {
      display: flex;
      flex-direction: row;

      .btn-orange {
        margin-right: 30px;
      }
    }
  }

  .purchase-wrap_images {
    position: relative;
  }

  .item-img {
    position: absolute;
    z-index: 1;
  }

  .kosilka {
    right: -160px;
    bottom: 190px;
    transform: rotate(15deg);
  }

  .makita {
    height: 474px;
    top: 260px;
    left: -45px;
    transform: rotate(-30deg);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding-top: 10px;
    .purchase {
      max-width: unset;
      order: 1;
      text-align: center;

      &-title {
        font: 62px/76px 'Stolz Bold';
      }

      &-text {
        margin-bottom: 40px;
        margin-top: 24px;
        font: 30px/24px sans-serif;
        width: 100%;
      }

      &-btns {
        flex-direction: column;

        .btn-orange {
          margin-right: unset;
          margin-bottom: 30px;
        }
      }
    }
    .item-img {
      position: relative;
      z-index: 1;
    }

    .kosilka {
      left: 40%;
      bottom: 0;
      transform: rotate(15deg);
      min-height: 317px;
      max-width: 395px;
      width: 60%;
    }

    .makita {
      max-height: 274px;
      min-height: 191px;
      height: 100%;
      top: 100px;
      left: -70px;
      transform: rotate(30deg);
      max-width: 305px;
      width: 50%;
      position: absolute;
    }
  }
  @media (max-width: 500px) {
    .purchase {
      &-title {
        font: 30px/33px 'Stolz Bold';
      }

      &-text {
        font: 20px/24px sans-serif;
      }

      &-btns {
        flex-direction: column;

        .btn-orange {
          margin-bottom: 15px;
        }

        .btns {
          font: 15px/18px "Stolz"
        }
      }
    }
  }

  @media (max-width: 458px){
    .makita {
      top: 40px;
      width: 40%;
    }
  }
  .anim-show {
    opacity: 0; /*Элемент полностью прозрачный (невидимый)*/
    transition: 1s; /*Скорость перехода состояния элемента*/
    animation: show 3s 1; /* Указываем название анимации, её время и количество повторов*/
    animation-fill-mode: forwards; /* Чтобы элемент оставался в конечном состоянии анимации */
    animation-delay: 1s; /* Задержка перед началом */
  }
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>