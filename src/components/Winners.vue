<template>
<section class="section container-xl" >
  <h1 class="title-section">Победители</h1>
  <div class="wrap-items">
    <div class="item">
      <div class="item-title">
        Первый тур
      </div>
    </div>
    <div class="item">
      <div class="item-title">
        Второй тур
      </div>
    </div>
    <div class="item">
      <div class="item-title">
        Третий тур
      </div>
    </div>
    <div class="item">
      <div class="item-title">
        Четвертый тур
      </div>
    </div>
    <div class="item">
      <div class="item-title">
        Гранд-финал
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Winners"
}
</script>

<style lang="scss" scoped>
    .section{
      margin-top: 104px;
      .wrap-items{
        margin-top: 104px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .item{
          flex: 1;
          margin-right: 20px;
          min-width: 314px;
        }

        .item-title{
          border: 2px solid #FFFFFF;
          border-radius: 16px;
          padding: 16px 32px;
          gap: 10px;
          margin-bottom: 20px;
          text-align: center;
          font: 24px/29px 'Stolz Light';
          &:hover{
            background: #EA5707;
            border: 2px solid #EA5707;
          }
        }
        @media (max-width: 768px) {
          margin-top: 34px;
        }
        @media (max-width: 691px) {
          flex-direction: column;
          .item{
            margin-right: unset;
          }
        }
      }
    }
</style>