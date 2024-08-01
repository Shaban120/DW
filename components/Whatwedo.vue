<template>
    <div>
        <v-img :src="require('../assets/Section2_back.png')">
            <v-container class="my-md-16 my-8">
                <v-row>
                    <v-col lg="5">
                        <p class="white--text text-16 poppins-regular">WHAT WE DO</p>
                        <h2 class="white--text text-42 belgin-bold">Why Choose Distinction Wrapping for Innovative wrapping solutions?
                        </h2>
                        <div style="background: white;height: 3px;width: 100px;" class="my-3"></div>
                        <p class="py-3 white--text poppins-regular text-16">
                            With our premium quality materials & innovative installation services</p>
                        <v-row>
                            <v-col cols="6" lg="6" class="white--text text-14 poppins-regular">
                                <v-row>
                                <v-col cols="2" md="2">
                                    <v-icon class="ps-2 white--text">mdi-arrow-right</v-icon>
                                </v-col>
                                <v-col cols="10" md="10">
                                    Quality Assurance
                                </v-col>
                            </v-row>
                            </v-col>
                            <v-col cols="6" lg="6" class="white--text text-14 poppins-regular">
                                <v-row>
                                    <v-col cols="2" md="2">
                                        <v-icon class="ps-2 white--text">mdi-arrow-right</v-icon>
                                    </v-col>
                                    <v-col cols="10" md="10">
                                        Innovative Techniques
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6" lg="6" class="white--text text-14 poppins-regular">
                                <v-row>
                                    <v-col cols="2" md="2">
                                        <v-icon class="ps-2 white--text">mdi-arrow-right</v-icon>
                                    </v-col>
                                    <v-col cols="10" md="10">
                                        Customer-Centric Approach
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="6" lg="6" class="white--text text-14 poppins-regular">
                                <v-row>
                                    <v-col cols="2" md="2">
                                        <v-icon class="ps-2 white--text ">mdi-arrow-right</v-icon>
                                    </v-col>
                                    <v-col cols="10" md="10">
                                        Competitive Pricing
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-btn color="white black--text mt-6" class="text-capitalize" elevation="0">Learn More <v-icon
                                class="ps-2">mdi-arrow-right</v-icon></v-btn>
                    </v-col>
                    <v-col class="col_none hidden-sm-and-down" md="1"></v-col>
                    <v-col cols="12" lg="6">
                        <v-card color="white" rounded="xl">
                            <div class="pa-5 pb-0">


                                <h4 class="poppins-bold text-24 mb-3">Request A Quote</h4>
                                <p class="poppins-light text-16">Fill out the form below to receive a customized quote
                                    for
                                    your project. Let's bring your vision to life!</p>
                            </div>
                            <iframe class="pt-0" src="https://api.leadconnectorhq.com/widget/form/qSqHSGSx4mmunYFN4JFT"
                                style="width:100%;height:100%;border:none;border-radius:3px"
                                id="inline-qSqHSGSx4mmunYFN4JFT" data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow" data-trigger-value=""
                                data-activation-type="alwaysActivated" data-activation-value=""
                                data-deactivation-type="neverDeactivate" data-deactivation-value=""
                                data-form-name="website contact" data-height="508"
                                data-layout-iframe-id="inline-qSqHSGSx4mmunYFN4JFT" data-form-id="qSqHSGSx4mmunYFN4JFT"
                                title="website contact">
                            </iframe>
                            <script src="https://link.msgsndr.com/js/form_embed.js"></script>
                            <!-- <v-form id="myForm" class="my-5 Form" action="https://formspree.io/f/xeqyzebk"
                                method="POST">
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <v-text-field required hide-details="true" name="name" solo placeholder="Name"
                                            style="font-size: 12px;"></v-text-field>
                                    </v-col>
                                    <v-col md="6">
                                        <v-text-field required hide-details="true" name="email" solo placeholder="Email"
                                            style="font-size: 12px;"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <v-text-field required hide-details="true" name="phoneNumber" solo
                                            placeholder="Phone Number" style="font-size: 12px;"></v-text-field>
                                    </v-col>
                                    <v-col md="6">
                                        <v-text-field required hide-details="true" name="subject" solo
                                            placeholder="Subject" style="font-size: 12px;"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <v-text-field required hide-details="true" name="message" class="elevation-0"
                                            dense solo placeholder="Message" style="font-size: 12px;"></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" md="12" class="my-5">
                                        <v-btn type="submit" @click="validateForm"
                                            style="justify-content: space-between;" block color="black white--text"
                                            class="text-capitalize py-5" elevation="0">Submit
                                            Enquiry<v-icon class="pr-auto">mdi-arrow-right</v-icon></v-btn>
                                    </v-col>
                                </v-row>
                            </v-form> -->
                        </v-card>
                    </v-col>
                </v-row>
                <v-dialog v-model="dialog" max-width="400">
                    <v-card>
                        <v-card-title class="headline">Alert</v-card-title>
                        <v-card-text>
                            Please fill in all required fields.
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" text @click="dialog = false">OK</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-container>
        </v-img>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false
        }
    },
    //     mounted() {
    //         const validateForm = (event) => {
    //             const form = document.getElementById('myForm');
    //             const inputs = form.getElementsByTagName('input');
    //             let isValid = true;
    //             for (let i = 0; i < inputs.length; i++) {
    //                 if (inputs[i].hasAttribute('required') && inputs[i].value.trim() === '') {
    //                     isValid = false;
    //                     break;
    //                 }
    //             }
    //             if (!isValid) {
    //                 event.preventDefault();
    //                 this.dialog = true; // Show dialog
    //             }
    //     //     };
    //     //     document.getElementById('myForm').addEventListener('submit', validateForm);
    //     // }
    // }
}
</script>

<style lang="scss" scoped>
.Form ::placeholder {
    font-size: 12px !important;
    font-weight: 400;
}

@media only screen and (max-width: 767px) {
    .col_none {
        display: none;
    }
}
</style>