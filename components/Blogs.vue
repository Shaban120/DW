<template>
    <div>

        <!-- <v-container class="mt-16">
            <v-row>
                <v-col cols="12" md="6">
                    <p class="text-18 poppins-regular">POPULAR BLOG</p>
                    <h2 class="text-48 fato-bold">Latest News</h2>
                </v-col>
                <v-col md="6" class="more_col">
                    <v-btn color="black" class="py-5 more-news-btn text-capitalize white--text">More News
                        <v-icon class="pl-3">mdi-arrow-right</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <VueSlickCarousel v-bind="settings" class="h-100 blogs mt-10">
                <v-card elevation="0">
                    <img width="100%" src="../assets/blog_1.png" alt="" />
                    <div class="py-5 px-2">
                        <p class="text-12 grey--text poppins-regular">February, 18 2024 | Leave a Comment</p>
                        <h3 class="text-24 poppins-semibold">2024 Latest Designs</h3>
                        <p class="text-16 poppins-regular">Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters.</p>
                    </div>
                </v-card>
                <v-card elevation="0">
                    <img width="100%" height="100%" src="../assets/blog_2.png" alt="" />
                    <div class="py-5 px-2">
                        <p class="text-12 grey--text poppins-regular">February, 18 2024 | Leave a Comment</p>
                        <h3 class="text-24 poppins-semibold">Layout for Kitchen</h3>
                        <p class="text-16 poppins-regular">Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters.</p>
                    </div>
                </v-card>
                <v-card elevation="0">
                    <img width="100%" src="../assets/blog_3.png" alt="" />
                    <div class="py-5 px-2">
                        <p class="text-12 grey--text poppins-regular">February, 18 2024 | Leave a Comment</p>
                        <h3 class="text-24 poppins-semibold">Kitchen Lightening Elements</h3>
                        <p class="text-16 poppins-regular">Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters.</p>
                    </div>
                </v-card>
                <v-card elevation="0">
                    <img width="100%" src="../assets/blog_2.png" alt="" />
                    <div class="py-5 px-2">
                        <p class="text-12 grey--text poppins-regular">February, 18 2024 | Leave a Comment</p>
                        <h3 class="text-24 poppins-semibold">Layout for Kitchen</h3>
                        <p class="text-16 poppins-regular">Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters.</p>
                    </div>
                </v-card>
            </VueSlickCarousel>
        </v-container> -->
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
.blogs .slick-prev {
    left: 8px !important;
    z-index: 9999;
    font-size: 28px !important;
    left: -10% !important;
    top: 30% !important;
}

.blogs .slick-next {
    z-index: 1;
    right: -10% !important;
    top: 30% !important;
}

.blogs .slick-prev:before,
.blogs .slick-next:before {
    background-color: white !important;
    color: black !important;
    font-size: 28px !important;
    opacity: 100% !important;
    border-radius: 100%;
}
.more_col{
    text-align: right !important;
}
.more-news-btn{
    margin-top: 56px;
}
@media only screen and (max-width: 767px) {
    .more_col{
    text-align: left !important;
}
.blogs .slick-prev {
        display: none !important;
}
.blogs .slick-next {
    display: none !important;
}
.more-news-btn{
    margin-top: 0px !important;
}
}


</style>