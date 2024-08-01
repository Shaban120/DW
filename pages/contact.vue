<template>
    <div>
        <v-img height="280" :src="require('../assets/Section2_back.png')">
            <v-container class="py-16">
                <h1 class="text-42 belgin-bold white--text text-center">Contact Us</h1>
            </v-container>
        </v-img>
        <v-container class="my-md-16 my-8">
            <v-row>
                <v-col md="6" cols="12">
                    <p class="PPRadioGrotesk-regular pa-text-contact text-18 pr-16">Have questions about Distinction Wrapping's
                        innovative interior solutions? We're here to help! Reach out to our friendly team for expert
                        advice, product recommendations, or project consultations. Whether you're a homeowner, designer,
                        or business owner, we'll guide you toward creating your dream space.
                        Fill out the contact form below. We look forward to hearing from you!
                        Reach out to us for:
                    <ul class="mt-md-5">
                        <li><b>innovative Advice:</b> Our team boasts extensive experience with interior design trends and
                            Cover Styl applications.
                        </li>
                        <li><b>Product Recommendations:</b> With a wide range of Cover Styl finishes and textures
                            available, finding the perfect match for your project can feel overwhelming. </li>
                        <li><b>Project Consultations:</b> Need help bringing your dream space to life? We offer
                            comprehensive consultations to discuss your project goals.</li>
                    </ul>


                    </p>
                </v-col>
                <v-col md="6" cols="12">
                    <v-img height="500" :src="require('../assets/Contactus.avif')">

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
            title: 'Conatct Distinction Wrapping',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: "Welcome to Distinction Wrapping, your go-to source for premium wrapping services to revamp your home and office with durable wraps for walls, furniture, and other surfaces. Whether you want to transform or enhance your interiors or need a bespoke wrapping solution, we have you covered."
                }
            ]
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {

    .pa-text-contact {
        padding: 0px !important;
    }
}
</style>