<template>
  <div class="">    
    <div :style="{ backgroundImage: `url(${require('../assets/Section1_background.png')})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 'fit-content',marginTop:'99px' }">
      <v-container class="py-8 py-md-16">
          <v-row>
            <v-col md="7" cols="12">
              <p class="text-16 mb-0 white--text poppins-medium">Free Samples Available               </p>
              <h2 style="line-height: 1.2;" class="text-42 white--text belgin-bold font-weight-bold">
                Share pictures of your space, and we'll provide digital visualisations to ensure your satisfaction
              </h2>
              <div class="border my-4"></div>
              <p class="text-14 white--text poppins-regular">Explore our range of services for interior and kitchen
                wrapping needs. Elevate your space effortlessly with our premium solutions. </p>
              <v-row>
                <v-col cols="5" md="6">
                  <nuxt-link to="/contact">
                    <v-btn  color="black" class="text-18 column_btn white--text py-5">Contact Us</v-btn>
                  </nuxt-link>
                </v-col>
                <v-col cols="7" md="6">
                  <a href="tel:+44 7913 225766">
                    <v-btn class="text-18 column_btn white--text py-5 ml-0" outlined>Call +44 7913 225766
                      <v-icon class="ml-3 hidden-sm-and-down">mdi-arrow-right</v-icon>
                    </v-btn>
                  </a>

                </v-col>
              </v-row>

            </v-col>
          </v-row>
        </v-container>
    </div>
    
    <About />
    <Whatwedo />
    <Promo />
    <Slider />
    <TestmonialsCard id="Testimonials" />
    <Blogs id="blog" />
  </div>
</template>

<script>
import About from '../components/About';
import Blogs from '../components/Blogs';
import Promo from '../components/Promo';
import Slider from '../components/Slider';
import TestmonialsCard from '../components/TestmonialsCard';
import Whatwedo from '../components/Whatwedo';
import OurProcess from '../components/OurProcess';

export default {
  head() {
    return {
      title: 'Distinction Wrapping - innovative Wrapping Solutions',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Transform your spaces with innovative wrapping solutions for homes and offices. Best kitchen wrap services in Dubai and the UK. High-quality materials & innovative installation.'
        }
      ]
    }
  },


  data() {
    return {};
  },
  components: { TestmonialsCard, About, Whatwedo, Promo, Slider, Blogs }
}
</script>

<style lang="scss">
.border {
  background: white;
  width: 100px;
  height: 4px;
}
.column_btn{
  width: 100%;
}
.v-carousel__controls {
  background: transparent !important;
  ;
}

.v-window__prev {
  margin-left: 55px !important;
}

.v-window__next {
  margin-right: 55px !important;
}

@media only screen and (max-width: 767px) {
//   .column_btn{
//   width: fit-content;
// }
  .v-window__prev {
    display: none;
  }

  .v-window__next {
    display: none;
  }
}
</style>