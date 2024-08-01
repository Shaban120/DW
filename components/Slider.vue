<template>
    <div class="white">
        <v-img :src="require('../assets/slide_1.png')">
            <v-container class="my-md-16 my-8">
                <VueSlickCarousel v-bind="settings" class="h-100 slider px-sm-5">
                    <img width="100%" height="400" src="../assets/slider_1.png" />
                    <img width="100%" height="400" src="../assets/slider_2.png" />
                    <img width="100%" height="400" src="../assets/slider_3.png" />
                    <img width="100%" height="400" src="../assets/slider_1.png" />
                </VueSlickCarousel>
            </v-container>
        </v-img>
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

export default {
    components: {
        VueSlickCarousel // Define VueSlickCarousel as a component
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
