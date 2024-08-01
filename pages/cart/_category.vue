<template>
    <div>
        <v-container>
            <div class="cart">
                <h1 class="belgin-bold text-32 text-center">You have selected {{ Products.length }} sample</h1>
                <v-row class="mt-md-10">
                    <v-col cols="12" md="6">
                        <div class="d-flex align-center my-5">
                            <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>arrow-left-bold</title>
                                <path d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z" />
                            </svg>
                            <nuxt-link to="/collection/wood">
                                <p class="text-18 black--text PPRadioGrotesk-Medium mr-2 mb-0">
                                    Back to sample selection
                                </p>
                            </nuxt-link>

                        </div>
                        <div>
                            <v-card class="card_product elevation-0" v-for="item in Products" :key="item.id">
                                <div class="card_content">
                                    <img style="border-radius: 8px;" width="96" height="96"
                                        :src="item.attributes.Image.data.attributes.url" />
                                    <div>
                                        <div class="card_header">
                                            <h1 class="text-24 belgin-bold">{{ item.attributes.Ref }}</h1>
                                            <div class="reference_Categories">
                                                <v-btn class="btn PPRadioGrotesk-medium" text>{{
                    item.attributes.product_category.data.attributes.Name }}</v-btn>
                                                <v-btn class="btn PPRadioGrotesk-medium" text>{{
                    item.attributes.product_finishing.data.attributes.Name }}</v-btn>
                                            </div>
                                        </div>
                                        <div>
                                            <p class="text-18 PPRadioGrotesk-medium font-weight-bold">{{
                    item.attributes.Name }}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <v-btn class="dlt_btn" @click="deleteProduct(index)">Delete</v-btn>
                                    </div>
                                </div>

                            </v-card>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <!-- Show the form if showForm1 is true -->
                        <v-form style="background-color: #EEE8D5;" class="py-8 px-4 Form">
                            <div>
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <span class="text-14">You are*</span>
                                        <v-select class="my-selective mt-2" v-model="formData.youAre" :items="options"
                                            label="Select an option" solo hide-details="true"
                                            style="font-size: 12px;"></v-select>
                                    </v-col>
                                    <v-col md="6" cols="12">
                                        <span class="text-14 ">Name*</span>
                                        <v-text-field class="mt-2" v-model="formData.name" hide-details="true" name="email" solo
                                            style="font-size: 12px;"></v-text-field>
                                    </v-col>
                                    <v-col md="6" cols="12">
                                        <span class="text-14 ">First Name</span>
                                        <v-text-field class="mt-2" v-model="formData.firstName" hide-details="true" name="email"
                                            solo style="font-size: 12px;"></v-text-field>
                                    </v-col>
                                    <v-col md="6" cols="12">
                                        <span class="text-14 ">Phone</span>
                                        <v-text-field class="mt-2" v-model="formData.phone" hide-details="true" name="email" solo
                                            style="font-size: 12px;"></v-text-field>
                                    </v-col>
                                    <v-col md="6" cols="12">
                                        <span class="text-14 ">Country*</span>
                                        <v-text-field class="mt-2" v-model="formData.country" hide-details="true" name="email"
                                            solo style="font-size: 12px;"></v-text-field>
                                    </v-col>
                                    <v-col md="6" cols="12">
                                        <span class="text-14 ">Postal Code*</span>
                                        <v-text-field class="mt-2" v-model="formData.postalCode" hide-details="true" name="email"
                                            solo style="font-size: 12px;"></v-text-field>
                                    </v-col>
                                    <v-col md="12" cols="12">
                                        <span class="text-14 ">E-mail address*</span>
                                        <v-text-field class="mt-2" v-model="formData.emailAddress" hide-details="true"
                                            name="email" solo style="font-size: 12px;"></v-text-field>
                                    </v-col>
                                    <v-col md="12" cols="12">
                                        <span class="text-14 ">Project description*</span>
                                        <v-textarea class="mt-2" v-model="formData.projectDescription" hide-details="true"
                                            name="email" solo rows="4" style="font-size: 12px;"></v-textarea>

                                    </v-col> </v-row>
                                <v-row>
                                    <v-col cols="12" md="12" class="my-5 text-md-right">
                                        <v-btn type="submit"
                                            style="justify-content: space-between;background-color: #D2E823;padding: 17px 32px 15px;font-size: 20px;border-radius: 48px;height: 55px;"
                                            color="black--text" class="belgin-bold py-5" elevation="0"
                                            @click.prevent="submitForm">SEND</v-btn>
                                    </v-col>
                                </v-row>
                            </div>


                        </v-form>
                        <!-- Show the additional fields if showForm1 is false -->

                    </v-col>
                </v-row>
            </div>
            <v-dialog v-model="showDialog" max-width="500">
                <v-card>
                    <v-card-title class="headline">Error</v-card-title>
                    <v-card-text>Please fill in all required fields.</v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" text @click="showDialog = false">Close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
           <v-dialog v-model="showThanksDialog" max-width="500">
  <v-card>
      <v-card-title class="headline">Thank You!</v-card-title>
      <v-card-text>
          Thank you for your submission!
      </v-card-text>
      <v-card-actions>
        <nuxt-link to="/">
          <v-btn color="primary" text @click="showThanksDialog = false">Close</v-btn>
        </nuxt-link>
      </v-card-actions>
  </v-card>
</v-dialog>


        </v-container>
    </div>
</template>

<script>
import jsonData1 from "~/Public/allData.json";
export default {
    data() {
  return {
      Products: [],
      showDialog: false, // Add this property to control error dialog visibility
      showThanksDialog: false, // Add this property to control thank you dialog visibility
      selectedItem: null, // Initializing selectedItem data property
      options: ['An interior designer', 'A professional in the adhesive film industry', 'A renovation company interested in offering the product to my customers',
          'A company interested in finding a Cover Styl fitter',
          'A private individual interested in the product'
      ],
      formData: {
          // Initialize form data properties
          youAre: '',
          name: '',
          firstName: '',
          phone: '',
          country: '',
          postalCode: '',
          emailAddress: '',
          projectDescription: '',
      }
  }
}
,
    methods: {

        submitForm() {
  // Check if any required field is empty
  if (!this.formData.name || !this.formData.emailAddress || !this.formData.projectDescription) {
      // Show the dialog for error
      this.showDialog = true;
  } else {
      // Perform form submission
      console.log('Form Data:', this.formData);
      // Reset form data after submission (optional)
      this.formData = {
          youAre: '',
          name: '',
          firstName: '',
          phone: '',
          country: '',
          postalCode: '',
          emailAddress: '',
          projectDescription: '',
      };
      // Hide the dialog (if previously shown)
      this.showDialog = false;
      // Show dialog with thank you message
      this.showThanksDialog = true;
  }
}

        ,

        getObjectByCategory(category) {
            const allData = jsonData1.props.pageProps.products.allData;
            console.log(allData); // Add this line to inspect the structure of allData
            this.Products = allData.filter(obj => {
                // Ensure that obj.attributes is defined before accessing nested properties
                if (obj.attributes && obj.attributes.product_category && obj.attributes.product_finishing) {
                    return obj.attributes.slug === category;
                } else {
                    return false; // If any nested property is undefined, filter out this object
                }
            });
            if (this.Products.length === 0) {
                console.log("No matching objects found for the category:", category);
            }
        },

        deleteProduct(index) {
            this.Products.splice(index, 1);
        }
    },
    mounted() {
        const category = this.$route.params.category;
        console.log(category);
        this.getObjectByCategory(category);
    }
}
</script>

<style lang="scss" scoped>
.card_product {
    padding: 16px 24px 16px 16px;
    border-radius: 16px;
    background-color: rgb(238, 232, 213);
}

.card_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card_header {
    display: flex;
    align-items: center;
    gap: 0.53em;
}

.reference_Categories {
    display: flex;
    gap: 8px;
}

.reference_Categories .btn {
    height: 24px;
    padding: 0 10px !important;
    font-size: 13px;
    border-radius: 24px;
    border: 1px solid;
    text-transform: capitalize;
}

.dlt_btn {
    padding: 0px 24px;
    background-color: white !important;
    border-radius: 24px;
    font-size: 18px;
    font-family: "PPRadioGrotesk-medium";
    font-weight: bold;
    text-transform: capitalize;
}
@media only screen and (max-width: 600px) {
    .card_content {
    gap: 10px
}
}

</style>