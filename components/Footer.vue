<template>
    <div>
       
        <div class="py-md-16"
            :style="{ backgroundImage: `url(${require('../assets/Fotter_img.png')})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 'fit-content' }">
            <v-container class="">
                <v-row class="mt-5">
                    <v-col md="4" cols="12">
                        <nuxt-link to="/">
                            <img class="mb-md-2" width="170" :src="require('../assets/DW Logo White.svg')" />
                        </nuxt-link>
                        <p class="white--text text-left text-14 poppins-regular">Discover how our innovative solutions
                            can transform your residential and commercial spaces today!
                        </p>
                    </v-col>
                    <v-col md="2" cols="6">
                        <nuxt-link to="/">

                        <p class="white--text text-20 poppins-medium"><a class="white--text">Home</a></p>
                        </nuxt-link>

                        

                        <div class="border mt-8 mb-4"></div>
                        <nuxt-link to="/">
                            <v-list color="transparent" class="white--text pa-0 text-14 poppins-regular">Home</v-list>
                        </nuxt-link>
                        <nuxt-link to="/blog">
                            <v-list color="transparent"
                                class="white--text pa-0 text-14 poppins-regular">Blog</v-list>
                        </nuxt-link>
                        <nuxt-link to="/resources">
                            <v-list color="transparent"
                                class="white--text pa-0 text-14 poppins-regular">Resources</v-list>
                        </nuxt-link>
                        <nuxt-link to="/about">
                            <v-list color="transparent" class="white--text pa-0 text-14 poppins-regular">About
                                Us</v-list>
                        </nuxt-link>
                        <nuxt-link to="/services">
                            <v-list color="transparent"
                                class="white--text pa-0 text-14 poppins-regular">Services</v-list>
                        </nuxt-link>
                    </v-col>
                    <v-col md="2">
                        <nuxt-link to="/collection/wood">
                            <p class="white--text text-20 poppins-medium"><a class="white--text">Collections</a></p>
                        </nuxt-link>
                        <div class="border mt-8 mb-4"></div>
                        <v-row>
                            <v-col md="4" cols="4">
                                <nuxt-link to="/collection/wood">
                                    <v-list color="transparent"
                                        class="white--text pa-0 text-14 poppins-regular">Wood</v-list>
                                </nuxt-link>
                                <nuxt-link to="/collection/color">
                                    <v-list color="transparent"
                                        class="white--text pa-0 text-14 poppins-regular">Color</v-list>
                                </nuxt-link>
                                <nuxt-link to="/collection/stone">
                                    <v-list color="transparent"
                                        class="white--text pa-0 text-14 poppins-regular">Stone</v-list>
                                </nuxt-link>
                            </v-col>
                            <v-col md="4" cols="3">
                                <nuxt-link to="/collection/concrete">
                                    <v-list color="transparent"
                                        class="white--text pa-0 text-14 poppins-regular">Concrete</v-list>

                                </nuxt-link>
                                <nuxt-link to="/collection/steel">
                                    <v-list color="transparent"
                                        class="white--text pa-0 text-14 poppins-regular">Steel</v-list>

                                </nuxt-link>
                                <nuxt-link to="/collection/glitter">
                                    <v-list color="transparent"
                                        class="white--text pa-0 text-14 poppins-regular">Glitter</v-list>

                                </nuxt-link>

                            </v-col>
                        </v-row>


                    </v-col>
                    <v-col md="4" cols="12" class="text-center text-md-left">
                        <nuxt-link to="/contact">
                            <p class="white--text text-20 poppins-medium"><a class="white--text">Contact Us</a></p>
                        </nuxt-link>
                        <div class="border ft-border mt-8 mb-4"></div>
                        <v-list color="transparent" class="white--text pa-0 text-14 poppins-regular">ADDRESS: 109
                            Cheetham Hill Road, Manchester, United Kingdom, M8 8PY</v-list>
                        <v-list color="transparent" class="white--text pa-0 text-14 poppins-regular">
                            Phone:
                            <a href="tel:+44 7913 225766" class="white--text">+44 7913 225766</a>
                        </v-list>

                        <v-list color="transparent" class="white--text pa-0 text-14 poppins-regular">
                            Email: <a href="mailto:info@distinctionwrapping.com"
                                class="white--text">info@distinctionwrapping.com</a>
                        </v-list>
                    </v-col>

                </v-row>
            </v-container>
        </div>
        <!-- Chat widget integration -->
        <chat-widget location-id="eYfduDnP9mHbOhbqiOFN" agency-name="Distinction Wrapping"
            agency-website="https://www.distinctionwrapping.com/" show-consent-checkbox="true">
        </chat-widget>
        <script src="https://widgets.leadconnectorhq.com/loader.js"
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js">
        </script>
    </div>
</template>
<script>
export default {
    data() {
        return {
            darkTheme: this.$vuetify.theme.dark
        }
    }
}
</script>
<style lang="scss" scoped>
.border {
    background-color: rgb(255, 255, 255);
    width: 100px;
    height: 4px;
}

@media only screen and (max-width: 767px) {

    .ft-border {
        margin: auto;

    }
}
</style>