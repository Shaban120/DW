<template>
    <div>
        <v-row class="">
            <v-col cols="12" md="5">
                <div>
                    <a class="d-flex align-center" href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10 3H3V10H10V3Z" stroke="#151A28" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path d="M21 3H14V10H21V3Z" stroke="#151A28" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path d="M21 14H14V21H21V14Z" stroke="#151A28" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path d="M10 14H3V21H10V14Z" stroke="#151A28" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                        <p class="ml-3 black--text mb-0 poppins-regular text-16">collections</p>
                    </a>
                </div>
            </v-col>
            <v-col class="text-md-right text-center" cols="12" md="7">
                <div class="collection">
                <v-btn text class="collection-btn PPRadioGrotesk-medium text-capitalize" to="/collection/wood">Wood</v-btn>
                <v-btn text class="ml-1 collection-btn PPRadioGrotesk-medium text-capitalize" to="/collection/color">Color</v-btn>
                <v-btn text class="ml-1 collection-btn PPRadioGrotesk-medium text-capitalize" to="/collection/stone">Stone</v-btn>
                <v-btn text class="ml-1 collection-btn PPRadioGrotesk-medium text-capitalize" to="/collection/concrete">Concrete</v-btn>
                <v-btn text class="ml-1 collection-btn PPRadioGrotesk-medium text-capitalize" to="/collection/steel">Steel</v-btn>
                <v-btn text class="ml-1 collection-btn PPRadioGrotesk-medium text-capitalize" to="/collection/textile">Textile</v-btn>
                <v-btn text class="ml-1 collection-btn PPRadioGrotesk-medium text-capitalize" to="/collection/glitter">Glitter</v-btn>
            </div>

            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {


        return {}
    }
}
</script>

<style lang="scss" >
.collection-btn.v-btn--active{
    background-color: #d2e823 !important;border-radius: 16px !important;
}
.collection-btn{
    padding: 0px 16px !important;height: 32px !important;
}
.theme--light.v-btn--active:hover::before, .theme--light.v-btn--active::before {
  opacity: -0.02 !important;
}
.collection-btn{
    font-size: 0.8em !important;padding: 0px !important;margin: 0px 10px !important;
}
</style>