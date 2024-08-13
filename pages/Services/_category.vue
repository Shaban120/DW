<template>
  <div>
    <v-img loading="eager" class="py-16" height="280"  :src="require(`../../assets/services/${getCategory.bannerImg}`)">
      <h1 class="belgin-bold text-center text-42 white--text">{{ getCategory.category }}</h1>
    </v-img>
    <v-container class="mt-16">
      <v-row>
        <v-col md="6" cols="12">
          <p class="PPRadioGrotesk-regular text-18 text-justify">{{ getCategory.explanation }}</p>
        </v-col>
        <v-col md="6" cols="12">
          <img width="100%" :src="require(`../../assets/services/${getCategory.side_img}`)" alt="">
        </v-col>
      </v-row>
    </v-container>
    <p></p>
    <Whatwedo />
    <Testimonails1 />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(["getCategory"])
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
