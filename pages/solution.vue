<template>
    <div>
        <div :style="{ backgroundImage: `url(${require('../assets/solution/banner.png')})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 'fit-content' }" >
            <v-container class="py-md-16">
                <div class="py-md-16 text-center" >
                    <p class="poppins-regular text-16 white--text">OUR SOLUTIONS</p>
                <h1 class="text-42 belgin-bold  white--text">
                    Transform Your Space with Our innovative solutions
                </h1>
                </div>
                
            </v-container>
        </div>
        <OurSolution />
        <QualitySolutionCard />
        <Whatwedo />
        <Testimonails1 />
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Distinction Wrapping Interior wrapping Solutions',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: "At Distinction Wrapping Interior Solutions, we are dedicated to transforming your interior spaces with our premium wrapping services."
                }
            ]
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped></style>