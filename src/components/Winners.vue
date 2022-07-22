<template>
<section class="section-winner container-xl" >
  <h1 class="title-section">Победители</h1>
  <div class="wrap-items">
    <div class="item">
      <a class="item-title" href="upload/1-tour.xls" download>
        Первый тур
      </a>
    </div>
    <div class="item">
      <a class="item-title" href="upload/2-tour.xls" download>
        Второй тур
      </a>
    </div>
    <div class="item">
      <a class="item-title" href="upload/3-tour.xls" download>
        Третий тур
      </a>
    </div>
    <div class="item">
      <a class="item-title" href="upload/4-tour.xls" download>
        Четвертый тур
      </a>
    </div>
    <div class="item">
      <a class="item-title" href="upload/5-tour.xls" download>
        Гранд-финал
      </a>
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
.item-title{
  display: block;
}
</style>