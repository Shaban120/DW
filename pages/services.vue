<template>
    <div>
            <div :style="{ backgroundImage: `url(${require('../assets/services/Banner.png')})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 'fit-content' }" >
                <v-container class="py-md-16" >
                    <div class="text-center py-md-16">
                            <p class="text-18 white--text poppins-regular">OUR SERVICES</p>
                            <h1 class="belgin-bold text-42 white--text">We specialise in bespoke vinyl wrapping services to meet our client's diverse needs and preferences. 
                            </h1>
                    </div>
                </v-container>
            </div>
        <OurPromise />
        <OurServices />
        <Whatwedo />
        <WorkFlow />
        <Testmonials1 />
    </div>
</template>

<script>
import TestmonialsCard from '../components/TestmonialsCard';
import Whatwedo from '../components/Whatwedo';
import OurPromise from '../components/OurPromise';
import OurServices from '../components/OurServices';
import WorkFlow from '../components/WorkFlow.vue';

export default {
    head() {
    return {
        title: 'Distinction Wrapping Vinyl Wrapping Services',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: "Distinction Wrapping is dedicated to delivering top-tier vinyl wrapping services, ensuring every project is handled with precision and creativity"
            }
        ]
    }
},
    data() {
        return {};
    },
    components: { TestmonialsCard, Whatwedo, OurPromise, OurServices, WorkFlow }
}
</script>

<style lang="scss" scoped></style>