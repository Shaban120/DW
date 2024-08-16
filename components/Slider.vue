<template>
    <div class="white">
        <v-img loading="eager" :style="{ backgroundImage: `url(${require('../assets/slide_1.png')})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 'fit-content' }" >
            <v-container class="my-md-16 my-8">
      <h1 class="text-42 belgin-bold white--text text-center">Blogs</h1>

      <v-row>
        <v-col cols="12" md="4" >
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
                <!-- <VueSlickCarousel v-bind="settings" class="h-100 slider px-sm-5">
                    <img width="100%" height="400" src="../assets/slider_1.png" />
                    <img width="100%" height="400" src="../assets/slider_2.png" />
                    <img width="100%" height="400" src="../assets/slider_3.png" />
                    <img width="100%" height="400" src="../assets/slider_1.png" />
                </VueSlickCarousel> -->
            </v-container>
        </v-img>
    <OurProcess class="my-md-16 my-8" />
        <v-container class="my-md-16 my-8">
            <v-row>
                <v-col md="5" cols="12">
                    <p class="text-18 poppins-regular">Why are we different?</p>
                    <h2 class="text-42 poppins-regular">Our Unique Approach Sets Us Apart</h2>
                    <div class="border my-3"></div>
                    <p class="text-22 poppins-regular">We Offers Ideas With Impressive Details.</p>
                    <v-btn color="black" class="px-5 mt-3 white--text text-capitalize" style="margin: 0px;">More Videos
                        <v-icon class="pl-3">mdi-arrow-right</v-icon>
                    </v-btn>
                </v-col>
                <v-col md="1" class="block_col hidden-sm-and-down"></v-col>
                <v-col md="6">
                    <p class="text-16 poppins-regular">At our core, we prioritize innovation and customer satisfaction.
                        Unlike others, we listen intently to your needs, ensuring every project reflects your vision.
                        Our team's expertise and attention to detail guarantee exceptional results, tailored to your
                        preferences. We embrace creativity and collaboration, delivering solutions that exceed
                        expectations. With a commitment to quality and integrity, we strive to make every interaction
                        with us seamless and enjoyable. Our dedication to excellence drives us to continually evolve and
                        improve, staying ahead of industry trends and setting new standards. Experience the difference
                        with us and see why we're the preferred choice for those seeking unmatched quality and service
                        in kitchen wrapping and interior design.</p>
                    <img style="width: 50%;" class="mt-3" src="../assets/line.png" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import OurProcess from '../components/OurProcess';

export default {
    components: {
        VueSlickCarousel,OurProcess // Define VueSlickCarousel as a component
    },
    data() {
        return {
            settings: {
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 3, // Set this to 3 to display three slides at a time
                slidesToScroll: 1,
                autoplaySpeed: 3000,
                autoplay: false,
                useCSS: true,
                responsive: [
                    {
                        breakpoint: 768, // Adjust this breakpoint as needed
                        settings: {
                            slidesToShow: 1 // Adjust slidesToShow for smaller screens
                        }
                    }
                ]
            }
        }
    }
}
</script>

<style lang="scss">
.border {
    background: black ;
    height: 4px;
    width: 100px;
}
.slick-slide {
  padding: 0 10px; /* Adjust the padding as needed */
}
.slider .slick-prev {
    left: 8px !important;
    z-index: 9999;
    font-size: 28px !important;
    left: -10% !important;
    top: 45% !important;
}

.slider .slick-next {
    z-index: 1;
    right: -10% !important;
    top: 45% !important;
}

.slider .slick-prev:before,
.slider .slick-next:before {
    color: white !important;
    font-size: 28px !important;
    opacity: 100% !important;
    border-radius: 100%;
}

@media only screen and (max-width: 767px) {
    .block_col {
        display: none;
    }

    .slider img {
        height: 200px !important;
    }

    .slider {
        padding-left: 1em;
        padding-right: 1em;
    }

    .slider .slick-prev {
        display: none !important;
    }

    .slider .slick-next {
        display: none !important;
    }
}
</style>
<style scoped>
.description {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>