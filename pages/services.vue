<template>
    <div>
        <v-img>
            <v-img cover :src="require('../assets/services/Banner.png')">
                <v-container class="py-16">
                    <div class="text-center py-md-16">
                            <p class="text-18 white--text poppins-regular">OUR SERVICES</p>
                            <h1 class="belgin-bold text-42 white--text">We specialise in bespoke vinyl wrapping services to meet our client's diverse needs and preferences. 
                            </h1>
                    </div>
                </v-container>
            </v-img>
        </v-img>
        <OurPromise />
        <OurServices />
        <Whatwedo />
        <WorkFlow />
        <TestmonialsCard />
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