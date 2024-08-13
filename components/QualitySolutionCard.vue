<template>
    <div>
        <v-container class="my-md-16 my-8">
            <v-row>
                <v-col cols="12">
                    <p class="poppins-regular text-16 text-center">WHY SHOULD CHOOSE US</p>
                    <h2 class="text-42 belgin-bold text-center">We Provide Quality Solution</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6" cols="12">
                    <img width="100%" src="../assets/solution/Why us (5).png" />
                </v-col>
                <v-col md="6" cols="12">
                    <img width="100%" src="../assets/solution/Why us (6).png" />
                </v-col>
            </v-row>
        </v-container>
        <v-container class="my-md-16 my-8">
            <v-row>
                <v-col md="3" cols="12" class="text-center">
                    <img width="80px" src="../assets/solution/furniture.png" />
                    <h2 class="poppins-medium text-18 mt-4 mb-2 ">Furniture Wrapping</h2>
                    <p class="poppins-regular text-14">Revitalise your existing furniture with our high-quality vinyl wraps in various finishes and textures.</p>
                </v-col>
                <v-col md="3" cols="12" class="text-center">
                    <img width="80px" src="../assets/solution/wall.png" />
                    <h2 class="poppins-medium text-18 mt-4 mb-2 ">Wall Wrapping</h2>
                    <p class="poppins-regular text-14">Transform your walls with our innovative and durable wall wraps to enhance any interior space.</p>

                </v-col>
                <v-col md="3" cols="12" class="text-center">
                    <img width="80px" src="../assets/solution/kitchen.png" />
                    <h2 class="poppins-medium text-18 mt-4 mb-2">Kitchen Wrapping</h2>
                    <p class="poppins-regular text-14">Collaborate with our team to develop innovative and personalized
                        design concepts for your space.</p>
                </v-col>
                <v-col cols="12" md="3" class="text-center">
                    <img width="80px" src="../assets/solution/commercial.png" />
                    <h2 class="poppins-medium text-18 mt-4 mb-2">Commercial Spaces</h2>
                    <p class="poppins-regular text-14">From offices to retail stores, we provide wrapping solutions that enhance the business environment.</p>

                </v-col>
            </v-row>
        </v-container>
        <v-container class="my-md-16 my-8">
            <v-row>
                <v-col cols="12">
                    <p class="poppins-regular text-24 text-center mb-0">OUR QUALITY WORK</p>
                </v-col>
                <v-col cols="12">
                    <h2 class="belgin-bold text-42 text-center mb-3">Portfolio</h2>
                </v-col>
            </v-row>
            <VueSlickCarousel v-bind="settings" class="h-100 portfolio px-sm-5">
                <div v-for="(service, index) in services" :key="index">
      <v-img loading="eager" width="100%" height="400" :src="require(`../assets/solution/${service.image}`)">
        <div class="layer px-5 py-3">
          <p class="black--text mb-0 text-16">{{ service.name }}</p>
          <div class="black_circle  black">
            <svg width="15" class="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>plus</title>
              <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
          </div>
        </div>
      </v-img>
    </div>
            </VueSlickCarousel>
        </v-container>
    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
    components: {
        VueSlickCarousel // Define VueSlickCarousel as a component
    },
    data() {
        return {
            services: [
        { id: 1, name: "Bathrooms", image: "Services (1).png" },
        { id: 2, name: "Bedrooms", image: "Services (2).png" },
        { id: 3, name: "Office Spaces", image: "Services (3).png" },
      ],
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
    },
    methods: {
    gotoCategory(item) {
      this.$store.commit('CATEGORY', item);
      this.$router.push({ path: `Services/${item.category}` })
    }
  }
}
</script>

<style lang="scss">
.portfolio .slick-prev:before,
.slider .slick-next:before {
    color: black !important;
    font-size: 28px !important;
    opacity: 1 !important;
    border-radius: 100%;
}

.portfolio .slick-next:before,
.slider .slick-next:before {
    color: black !important;
    font-size: 28px !important;
    opacity: 1 !important;
    border-radius: 100%;
}

.border-left {
    background-color: black;
    height: 2px;
}

.slick-prev {
    left: 8px !important;
    z-index: 9999;
    font-size: 28px !important;
    left: -10% !important;
    top: 45% !important;
}

.slick-next {
    z-index: 1;
    right: -10% !important;
    top: 45% !important;
}

.layer {
    position: absolute;
    bottom: 3%;
    width: 100%;
    background: #f7f7f7 !important;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

.black_circle {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: black !important;
}

.plus {
    fill: white !important;
}

@media only screen and (max-width: 767px) {}
</style>