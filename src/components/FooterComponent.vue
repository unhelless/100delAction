<template>
  <footer>
    <div class="container-xl footer">
      <div class="logo shadow-rad">
        <img src="~@/assets/image/header/prize.png" alt="">
      </div>
      <div class="footer-menu_links shadow-rad_blue">
        <ul>
          <li class="li-link">
            <a href="policy/Публичная Оферта.docx" download class="link">
              Правила акции
            </a>
          </li>
          <li class="li-link">
            <a href="policy/Политика конфиденциальности.docx" download class="link">
              Политика конфиденциальности
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style lang="scss" scoped>
footer {
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  border-radius: 48px 48px 0px 0px;
  padding: 48px 0;

  margin-top: 154px;
  @media (max-width: 768px) {
    margin-top: 94px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {

      img {
        position: relative;
        max-width: 351px;
        width: 100%;
      }
    }

    .footer-menu_links {
      position: relative;

      ul {
        list-style: none;

        li {
          &:nth-child(2) {
            margin-top: 20px;
          }

          .link {
            font: 24px/29px 'Stolz Light';
          }
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      .logo {
        margin-bottom: 44px;
      }
      text-align: center;
    }
  }

  .shadow-rad:before {
    width: 10px;
    height: 10px;
    opacity: 0.5;
    top: 220px;
    @media (max-width: 400px) {
      opacity: 0;
    }
  }

  .shadow-rad_blue:before {
    border-radius: 100%;
    content: "";
    width: 10px;
    height: 10px;
    opacity: 0.7;
    position: absolute;
    z-index: 0;
    background: radial-gradient(50% 50% at 50% 50%, #6D388D 0%, rgba(99, 41, 134, 0.5) 36.98%, rgba(91, 34, 130, 0.44) 100%);
    box-shadow: 20px 20px 420px 300px rgb(99 41 134 / 50%);
    mix-blend-mode: color-dodge;
    @media (max-width: 400px) {
      width: 0px;
      height: 10px;
      opacity: 0.7;
      right: 0;
      bottom: 0;
    }
  }
}

</style>