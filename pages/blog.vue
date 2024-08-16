<template>
  <div>
    <div class="d-flex align-center justify-center" style="height: 280px;">
      <h1 class="text-42 belgin-bold black--text text-center">Blogs</h1>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="mx-auto my-6" max-width="374">
            <v-img height="250" :src="require('../assets/officeSpaces.jpg')"></v-img>
            <v-card-title style="word-break: unset;">Enhance Your Business Space with Distinction Wrapping</v-card-title>
            <v-card-text>
              <div class="description">
                A well-designed business space is crucial for creating a positive impression on clients and customers. Whether you own a retail store, office, or commercial property, the aesthetics of your space significantly impact your brand image and customer experience. Distinction Wrapping offers top-tier vinyl wrapping services that provide an elegant, professional, cost-effective solution to upgrade your business interiors.
              </div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
              <nuxt-link to="/blogs/businessSpace">
              <v-btn color="deep-purple lighten-2" text >
                Read More
              </v-btn>
            </nuxt-link>
            </v-card-actions>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="4">
          <v-card class="mx-auto my-6" max-width="374">
            <v-img height="250" :src="require('../assets/KitchenSpace.jpg')"></v-img>
            <v-card-title style="word-break: unset;">Transform Your Kitchen with Distinction Wrapping</v-card-title>
            <v-card-text>
              <div class="description">
                The kitchen is the heart of any home—where family and friends gather, share meals, and create memories. If your kitchen feels outdated or lacks the desired aesthetic appeal, it might be time for a transformation. Distinction Wrapping offers a cutting-edge solution to revitalise any kitchen without the hassle and expense of a complete renovation. Our vinyl wrapping services provide an affordable, stylish, and durable way to upgrade kitchen cabinets, walls, and furniture.
              </div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
              <nuxt-link to="/blogs/kitchenSpace">
              <v-btn color="deep-purple lighten-2" text >
                Read More
              </v-btn>
            </nuxt-link>
            </v-card-actions>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="4">
          <v-card class="mx-auto my-6" max-width="374">
            <v-img height="250" :src="require('../assets/KitchenSpace.jpg')"></v-img>
            <v-card-title style="word-break: unset;">Transform Your Space with Distinction Wrapping's Premium Vinyl Wrapping Services</v-card-title>
            <v-card-text>
              <div class="description">
                Are you looking to rejuvenate your home or business environment with a fresh, stylish look? Distinction Wrapping offers top-of-the-line vinyl wrapping services designed to transform interior surfaces, furniture, walls, cabinets, and doors with unparalleled quality and customisation options. Whether you're a homeowner, business owner, commercial property owner, or residential property owner, our services provide an innovative, cost-effective solution to revamp your living and working spaces, helping you save while upgrading your space.
              </div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
              <nuxt-link to="/blogs/premiumVinyl">
              <v-btn color="deep-purple lighten-2" text >
                Read More
              </v-btn>
            </nuxt-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Whatwedo />
    <Promo />
    <TestmonialsCard id="Testimonials" />
  </div>
</template>

<script>
import About from '../components/About';
import Blogs from '../components/Blogs';
import Promo from '../components/Promo';
import Slider from '../components/Slider';
import TestmonialsCard from '../components/TestmonialsCard';
import Whatwedo from '../components/Whatwedo';
export default {
  components: { TestmonialsCard, About, Whatwedo, Promo, Slider, Blogs },

  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
/* Add any custom styles if needed */
.description {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
