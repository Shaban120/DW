<template>
    <div>
        <v-container class="my-md-16 my-8">
            <v-row>
                <v-col md="6" cols="12">
                    <p class="black--text text-16 poppins-semibold">OUR SOLUTIONS</p>
                    <h2 class="text-42 belgin-bold">Solutions That We Provide</h2>
                </v-col>
                <v-col md="6" cols="12">
                    <p style="line-height: 2.1;" class="text-14 mbl-p poppins-regular mr-16 pr-16">Discover our comprehensive solutions designed to elevate your space and bring your vision to life with style and precision</p>
                    <v-btn class="text-capitalize mt-5 py-5 white--text black">Explore More
                        <v-icon class="ml-3">mdi-arrow-right</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="px-16 mbl_container" fluid>
            <v-row>
                <v-col md="6" cols="12">
                    <v-card>
                    <v-img :src="require('../assets/solution/solutions imgs (2).png')">
                        <img class="sol_icon" width="100" src="../assets/solution/solutions Icons (1).png" />
                        
                    </v-img>
                    <div style="position: relative;" class="black px-10 py-3">
                        <nuxt-link to="/resources">
                        <h4 class="white--text poppins-semibold text-28">
                            Commercial Solutions</h4>
                        <p class="white--text poppins-medium text-16">Explore our commercial solutions</p>
                        <div class="white_circle">
                            <img width="50%" src="../assets/solution/Arrows (8).png" />
                        </div>
                    </nuxt-link>
                    </div>
                </v-card>
                </v-col>
                <v-col md="6" cols="12">
                    <v-card>
                    <v-img :src="require('../assets/solution/solutions imgs (1).png')">
                        <img class="sol_icon" width="100" src="../assets/solution/solutions Icons (2).png" />
                    </v-img>
                    <div style="position: relative;" class="black px-10 py-3">
                        <nuxt-link to="/resources">
                        <h4 class="white--text poppins-semibold text-28">Residential Solutions</h4>
                        <p class="white--text poppins-medium text-16">Explore our residential solutions</p>
                        <div  class="white_circle">
                            <img width="50%" src="../assets/solution/Arrows (8).png" />
                        </div>
                    </nuxt-link>
                    </div>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data () {
        
        return {}
    }
}
</script>

<style lang="scss" scoped>
.sol_icon{
    position: absolute;
    left: 10%;
    top: 8%;
}
.white_circle{
    background-color: white;height: 50px;width: 50px;display: flex;align-items: center;justify-content: center;border: 3px solid black;border-radius: 50%;position: absolute;top: -22%;right: 4%;
}
@media only screen and (max-width: 767px) {
        .mbl-p{
            margin: 0px !important;padding: 0px !important;
    }
    .mbl_container{
        padding: 12px !important;
    }
}

</style>