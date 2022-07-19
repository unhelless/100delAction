<template>
  <HeaderComponent class="container-xl" />
  <SectionComponent1 class="container-xl" />
  <SectionComponent2 class="container-xl" />
  <SectionComponent3 class="container-xl" />
  <FormComponent/>
  <Winners />
  <TimeComponent/>
  <AddressComponent/>
  <FooterComponent />
</template>

<script>

import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import SectionComponent1 from "@/components/SectionComponent1";
import SectionComponent2 from "@/components/SectionComponent2";
import FormComponent from "@/components/FormComponent";
import Winners from "@/components/Winners";
import TimeComponent from "@/components/TimeComponent";
import SectionComponent3 from "@/components/SectionComponent3";
import AddressComponent from "@/components/AddressComponent";

export default {
  name: 'App',
  components:{
    HeaderComponent,
    SectionComponent1,
    SectionComponent2,
    SectionComponent3,
    FormComponent,
    TimeComponent,
    Winners,
    AddressComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
@import "main";
</style>
