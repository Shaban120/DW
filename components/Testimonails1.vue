<template>
    <div>
        <div style="background-color: #f7f7f7;">
            <v-container class="py-16">
                <p class="black--text text-18 poppins-regular">TESTIMONAILS</p>
                <v-row>
                    <v-col cols="12" lg="6" md="12" sm="12">
                        <h2 class="black--text text-42 belgin-bold">See What our clients says</h2>
                    </v-col>
                    <v-col class="block_col" md="2">
                    </v-col>
                    <v-col md="2" sm="12">
                        <div style="border-right: 2px solid black;">
                            <h3 class="black--text">372+</h3>
                            <p class="black--text">Happy Customers</p>
                        </div>

                    </v-col>
                    <v-col md="2" sm="12">
                        <h3 class="black--text">100%</h3>
                        <p class="black--text">Satisfaction Rate</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="4" cols="12">
                        <v-card class="pa-5" elevation="0">
                            <v-row>
                                <v-col sm="4" md="4">
                                    <div style="position: relative;">
                                        <v-img loading="eager" :src="require('../assets/men3.jpeg')" height="100" width="100"
                                            class="rounded-image" alt="Men Image"></v-img>
                                        <img class="comma_img" style="position: absolute;
  bottom: 0%;
  right: -20%;" width="50" src="../assets/services/QUO round 1.png" />

                                    </div>
                                </v-col>
                                <v-col sm="8" md="8">
                                    <h4 class="black--text poppins-semibold">Harry Stilloy</h4>
                                    <p class="black--text poppins-medium">Project Manager</p>
                                </v-col>

                                <v-col sm="12" md="12" cols="12">
                                    <h4 class="text-18 poppins-medium">I am thrilled with the kitchen transformation!
                                        Exceeded all expectations.

                                    </h4>
                                </v-col>
                                <v-col md="12">
                                    <v-icon class="yellow--text">mdi-star</v-icon>
                                    <v-icon class="yellow--text">mdi-star</v-icon>
                                    <v-icon class="yellow--text">mdi-star</v-icon>
                                    <v-icon class="yellow--text">mdi-star</v-icon>
                                    <v-icon class="yellow--text">mdi-star</v-icon>
                                </v-col>
                            </v-row>
                            <img style="position: absolute;
                                right: 10%;
                                bottom: 8%;" width="80" src="../assets/services/QUO (2).png" />
                        </v-card>
                    </v-col>
                    <v-col md="4" cols="12">
                        <v-card class="pa-5 black" elevation="0">
                            <v-row>
                                <v-col sm="4" md="4">
                                    <div style="position: relative;">
                                        <v-img loading="eager" :src="require('../assets/men2.jpeg')" height="100" width="100"
                                            class="rounded-image" alt="Men Image"></v-img>
                                        <img class="comma_img" style="position: absolute;
  bottom: 0%;
  right: -20%;" width="50" src="../assets/services/QUO round 1.png" />

                                    </div>
                                </v-col>
                                <v-col sm="8" md="8">
                                    <h4 class="poppins-semibold white--text">Amelia</h4>
                                    <p class="poppins-medium white--text ">Director</p>
                                </v-col>
                                <v-col md="12" cols="12">
                                    <h4 class="white--text text-18 poppins-medium">Professional, friendly, and
                                        exceptional service from start to finish. Highly recommend.</h4>
                                </v-col>
                                <v-col md="12">
                                    <v-icon class="white--text">mdi-star</v-icon>
                                    <v-icon class="white--text">mdi-star</v-icon>
                                    <v-icon class="white--text">mdi-star</v-icon>
                                    <v-icon class="white--text">mdi-star</v-icon>
                                    <v-icon class="white--text">mdi-star</v-icon>
                                </v-col>
                            </v-row>
                            <img style="position: absolute;
  right: 10%;
  bottom: 8%;" width="80" src="../assets/services/QUO (3).png" />
                        </v-card>
                    </v-col>
                    <v-col md="4" cols="12">
                        <v-card class="pa-5" elevation="0">
                            <v-row>
                                <v-col sm="4" md="4">
                                    <div style="position: relative;">
                                        <v-img loading="eager" :src="require('../assets/men1.jpeg')" height="100" width="100"
                                            class="rounded-image" alt="Men Image"></v-img>
                                        <img class="comma_img" style="position: absolute;
  bottom: 0%;
  right: -20%;" width="50" src="../assets/services/QUO round 1.png" />

                                    </div>
                                </v-col>
                                <v-col sm="8" md="8">
                                    <h4 class="poppins-semibold">Adam Smith</h4>
                                    <p class="poppins-medium">Director</p>
                                </v-col>
                                <v-col md="12" cols="12">
                                    <h4 class="text-18 poppins-medium">Transformed my kitchen into a masterpiece. I
                                        couldn't be happier with the results.
                                    </h4>
                                </v-col>
                                <v-col md="12">
                                    <v-icon class="yellow--text">mdi-star</v-icon>
                                    <v-icon class="yellow--text">mdi-star</v-icon>
                                    <v-icon class="yellow--text">mdi-star</v-icon>
                                    <v-icon class="yellow--text">mdi-star</v-icon>
                                    <v-icon class="yellow--text">mdi-star</v-icon>
                                </v-col>
                            </v-row>
                            <img style="position: absolute;
  right: 10%;
  bottom: 8%;" width="80" src="../assets/services/QUO (2).png" />
                        </v-card>
                    </v-col>

                </v-row>
                  
            </v-container>
        </div>
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
.rounded-image {
    border-radius: 50%;
}

@media only screen and (max-width: 767px) {
    .block_col {
        display: none;
    }

    .comma_img {
        right: 30% !important;
    }
}
</style>