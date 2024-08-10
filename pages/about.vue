<template>
    <div>
        <v-img height="280" :src="require('../assets/ABout Us Banner.png')">
            <v-container class="py-16">
            <h1 class="text-42 belgin-bold white--text text-center">Distinction Wrapping vinyl Wrap Expertise</h1>
        </v-container>
    </v-img>
        <v-container class="my-md-16 my-8 about-container">
            <v-row>
                <v-col md="6" cols="12">
                    <h3 class="belgin-bold black--text text-32">Expert Interior Wrapping Solutions for Every Home and Project
                    </h3>
                    <p class="PPRadioGrotesk-regular pa-text-about text-18 pr-16 text-justify mt-5">
                        At Distinction Wrapping, we pride ourselves on our in-depth knowledge and extensive experience in vinyl wrapping. Our team of skilled professional installers is adept at handling projects of all sizes, from small residential updates to large commercial renovations. We provide customized solutions that meet our clients' unique needs, ensuring a perfect fit and finish every time. Our expertise allows us to transform any interior space with precision and creativity, enhancing both functionality and aesthetic appeal. Whether you're looking to refresh your kitchen, revamp your furniture, or create distinctive wall designs, our innovative interior wrapping solutions deliver outstanding results that exceed expectations. Trust Distinction Wrapping for all your vinyl wrapping needs.
</p>
                </v-col>
                <v-col md="6" cols="12">
                    <v-img height="500" :src="require('../assets/AboutImg.Avif')">

                    </v-img>
                </v-col>
            </v-row>
        </v-container>
        <Whatwedo />
        <Testimonails1 />
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'About Distinction Wrapping: Vinyl Wrap Experts',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: "Distinction Wrapping is the premier destination for vinyl wrap solutions. We offer unparalleled installation expertise in transforming spaces with high-quality wrapping materials"
                }
            ]
        }
    },
    data () {
        return {}
    }
}
</script>


<style lang="scss" scoped>
@media (max-width: 767px) {
    .about-container{
        margin: 0px !important;
    }
    .pa-text-about{
        padding: 0px !important;
    }
}
.text-32{
    font-size: 32px !important;
    line-height: normal !important;
}
</style>