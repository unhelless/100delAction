<template>
  <section class="section container-xl">
    <h1 class="title-section">
      Адреса магазинов
    </h1>
    <div class="wrap-yacard" style="position:relative;overflow:hidden;"><a
        href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps"
        style="color:#eee;font-size:12px;position:absolute;top:0px;">Яндекс Карты</a><a
        href="https://yandex.ru/maps/?from=api-maps&ll=138.504639%2C44.525742&origin=jsapi_2_0&pt=135.11449%2C48.481618~135.066381%2C48.484971~135.114094%2C48.479554~135.047345%2C48.554658~137.018266%2C50.550666~137.028427%2C50.538131~137.03046%2C50.560167~132.938934%2C48.783981~131.930305%2C43.103088~131.915057%2C43.169457&utm_medium=mapframe&utm_source=maps&z=6"
        style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты — транспорт, навигация, поиск
      мест</a>
      <iframe src="https://yandex.ru/map-widget/v1/-/CCUNnODkXA" frameborder="1"
              allowfullscreen="true" style="position:relative;"></iframe>
    </div>

  </section>
</template>

<script>
export default {
  name: "AddressComponent"
}
</script>

<style lang="scss" scoped>
.section {
  margin-top: 282px;
  @media(max-width: 768px) {
    margin-top: 162px;
  }
}

.wrap-yacard {
  margin-top: 88px;
  filter: drop-shadow(0px 4px 4px #402483);
  border-radius: 42px;
  width: 100%;
  max-height: 715px;

  & iframe {
    width: 100%;
    height: 715px;
    @media (max-width: 768px) {
      height: 443px;
    }
  }
}
</style>