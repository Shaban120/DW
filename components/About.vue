<template>
    <div>
        <v-container class="my-md-16 my-8">
            <v-row>
                <v-col cols="12" lg="8">
                    <div class="youtube-embed-wrapper">
      <div class="youtube-embed">
        <iframe
          width="100%"
          height="480px"
          src="https://www.youtube.com/embed/7F2oLp1gUsQ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>                </v-col>
                <v-col lg="4">
                    <p class="text-16 black--text poppins-regular">ABOUT US</p>
                    <h1 class="text-42 belgin-bold">Innovative Wrapping Solutions</h1>
                    <div class="border my-3"></div>
                    <p class="py-2 text-20  poppins-regular">Distinction wrapping’s vinyl wrapping solutions are designed to deliver functionality and aesthetic appeal, ensuring that your products are wrapped to perfection. With our innovative wrapping solutions, you can transform any interior space, adding both beauty and durability.</p>
                    <nuxt-link to="/contact">
                        <v-btn color="black white--text" class="text-capitalize pa-5" elevation="0">Contact Us <v-icon
                                class="pl-4">mdi-arrow-right</v-icon></v-btn>
                    </nuxt-link>
                </v-col>
            </v-row>
            <v-row class="mt-10">
                <v-col cols="12" lg="4">
                    <v-row>
                        <v-col cols="4" lg="4">
                            <div class="black_circle">
                                <img src="../assets/support.png" />
                            </div>
                        </v-col>
                        <v-col cols="8" lg="8">
                            <h4 class="poppins-medium text-18 black--text">Professional and Courteous Team</h4>
                            <p class="poppins-regular text-14">Our skilled and friendly workers ensure a smooth and
                                pleasant experience.</p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col lg="4" cols="12">
                    <v-row>
                        <v-col lg="4" cols="4">
                            <div class="black_circle">
                                <img src="../assets/calculation.png" />
                            </div>
                        </v-col>
                        <v-col lg="8" cols="8">
                            <h4 class="poppins-medium text-18 black--text">Sustainable Kitchen Solutions</h4>
                            <p class="poppins-regular text-14">Discover our eco-conscious approach to kitchen design and
                                materials.</p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" lg="4">
                    <v-row>
                        <v-col lg="4" cols="4">
                            <div class="black_circle">
                                <img src="../assets/save-forest.png" />
                            </div>
                        </v-col>
                        <v-col lg="8" cols="8">
                            <h4 class="poppins-medium text-18 black--text">10 Year Warranty </h4>
                            <p class="poppins-regular text-14">(on all materials)</p>
                        </v-col>

                    </v-row>
                </v-col>
                <!-- Another Section -->
                <v-col cols="12" lg="4">
                    <v-row>
                        <v-col cols="4" lg="4">
                            <div class="black_circle">
                                <img src="../assets/calculation.png" />
                            </div>
                        </v-col>
                        <v-col cols="8" lg="8">
                            <h4 class="poppins-medium text-18 black--text">Custom Vinyl Wrapping</h4>
                            <p class="poppins-regular text-14">We offer bespoke wrapping solutions that cater to unique client requirements.</p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col lg="4" cols="12">
                    <v-row>
                        <v-col lg="4" cols="4">
                            <div class="black_circle">
                                <img src="../assets/save-forest.png" />
                            </div>
                        </v-col>
                        <v-col lg="8" cols="8">
                            <h4 class="poppins-medium text-18 black--text">Sustainable Vinyl Wrapping</h4>
                            <p class="poppins-regular text-14">Committed to environmental responsibility, we provide eco-friendly vinyl wrapping materials.</p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" lg="4">
                    <v-row>
                        <v-col lg="4" cols="4">
                            <div class="black_circle">
                                <img src="../assets/support.png" />

                            </div>
                        </v-col>
                        <v-col lg="8" cols="8">
                            <h4 class="poppins-medium text-18 black--text">Residential & Commercial Wrapping</h4>
                            <p class="poppins-regular text-14">Our vinyl wrapping services adds elegance to  walls, furniture and cabinets to enhance your spaces.</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
.border {
    background: black;
    height: 4px;
    width: 100px;
}

.black_circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    /* Ensures it's a circle */
    background-color: black;
    display: flex;
    justify-content: center;
    /* Centers content horizontally */
    align-items: center;
    /* Centers content vertically */
}

.black_circle img {
    max-width: 70px;
    /* Adjust the size of the image as needed */
    max-height: 70px;
}
.youtube-embed-wrapper {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.youtube-embed {
  width: 100%;
  height: 480px;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
</style>