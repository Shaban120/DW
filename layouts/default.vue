<template>
  <v-app light>
    <Header />

    <v-main>
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>
      
    </v-main>
    <SubFotter />
<Footer />
<noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WJG79QJB"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from 'moment';
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";


export default {
    target: "static",
    name: "DefaultLayout",
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false,
            src: "",
            right: true,
            // isMobile: window.innerWidth <= 767,
            // rightDrawer: false,
            window: {
                width: 0,
                height: 0,
            },
        };
    },
    methods: {
        ...mapActions([""]),
        changeRoute() {
            this.$router.push({ path: "" });
        },
        showLoginDialog(e) {
            // console.log(newValue)
            this.$refs.loginDialog.show = this.$refs.loginDialog.show = true;
            this.$refs.loginDialog.toggleLogin(e);
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
    },
    computed: {},
    created() {
        if (process.client) {
            this.handleResize();
        }
    },
    destroyed() {
        window.removeEventListener("resize", this.handleResize);
    },
    components: { Header, Footer }
};
</script>
<style>
.poppins-thin {
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-style: normal;
}

.poppins-thin-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-style: italic;
}

.poppins-extralight {
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-style: normal;
}

.poppins-extralight-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-style: italic;
}

.poppins-light {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.poppins-light-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: italic;
}

.poppins-regular {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.poppins-regular-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.poppins-medium {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.poppins-medium-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: italic;
}

.poppins-semibold {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
}

.poppins-semibold-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: italic;
}

.poppins-bold {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.poppins-bold-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: italic;
}

.poppins-extrabold {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-style: normal;
}

.poppins-extrabold-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-style: italic;
}

.poppins-black {
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.poppins-black-italic {
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-style: italic;
}



/* font family Lato */

@font-face {
  font-family: "playFairDispaly-regular"; /* Specify a name for your font */
  src: url("../assets/Fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf") format("truetype"); /* Adjust the path */
}
@font-face {
  font-family: "OpenSans-regular"; /* Specify a name for your font */
  src: url("../assets/Fonts/Open_Sans/static/OpenSans-Regular.ttf") format("truetype"); /* Adjust the path */
}
@font-face {
  font-family: "OpenSans-bold"; /* Specify a name for your font */
  src: url("../assets/Fonts/Open_Sans/static/OpenSans-Bold.ttf") format("truetype"); /* Adjust the path */
}
@font-face {
  font-family: "belgin-bold";
  src: url("../assets/Fonts/Belgin/balgin-bold.woff2");
}
@font-face {
  font-family: "PPRadioGrotesk-regular";
  src: url("../assets/Fonts/PPRadioGrotesk/PPRadioGrotesk-Regular.woff2");
}
@font-face {
  font-family: "PPRadioGrotesk-medium";
  src: url("../assets/Fonts/PPRadioGrotesk/PPRadioGrotesk-Medium.woff");
}

@font-face {
  font-family: "poppins-regular";
  src: url("../assets/Fonts/Poppins/Poppins-Medium.ttf");
}
.PPRadioGrotesk-medium{
  font-family: "PPRadioGrotesk-medium" ,sans-serif !important;
}
.PPRadioGrotesk-regular{
  font-family: "PPRadioGrotesk-regular" ,sans-serif !important;
}
.FF_Playfair-regular{
  font-family: 'playFairDispaly-regular' !important;
}
.belgin-bold{
  font-family: "belgin-bold",sans-serif !important;
}
.FF_OpenSans-regular{
font-family: 'OpenSans-regular', sans-serif  !important;
}
.FF_OpenSans-bold{
font-family: 'OpenSans-bold', sans-serif  !important;
}
.FF_Poppins-medium{
  font-family: "poppins-medium" ,sans-serif !important;font-weight: 300 !important;
}

.sample-btn{
  font-size: 16px !important;
}

.text-18{
  font-size: 18px;
}
.text-28{
  font-size: 28px;
}
.text-14{
  font-size: 14px;
}
.text-10{
  font-size: 10px;
}
.text-13{
  font-size: 13px !important;
}
.text-16{
  font-size: 16px;
}
.text-20{
  font-size: 20px;
}
.text-22{
  font-size: 22px;
}
.text-34{
  font-size: 34px;
}
.text-42{
  font-size: 33px;
}
.text-24{
  font-size: 24px;
}
.text-48{
  font-size: 48px;line-height: 1.2
}
.text-64{
  font-size: 64px;
}
.v-application{
  font-family: "poppins-regular" !important;
}
.nuxt-link-active{
  text-decoration: none !important;
}
.v-application a {
  text-decoration: none !important;
}

@media only screen and (max-width: 767px) {
  .text-42{
    font-size: 26px;
  }
  .text-24{
  font-size: 16px;
}
.text-20{
  font-size: 16px;
}
 
}
</style>
