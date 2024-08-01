<template>
  <div>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <div class="text-center section-1">
          <h1 class="mb-4 belgin-bold text-104">Digital Brochures</h1>
        </div>
      </v-tab-item>

      <v-tab-item>
        <div class="text-center section-1">
          <h1 class="mb-4 belgin-bold text-104">BEFORE / AFTER</h1>
          <p class="mt-n6 PPRadioGrotesk-regular">Discover the various projects completed with Cover Styl design
            adhesive coverings</p>
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="text-center section-1">
          <h1 class="mb-4 belgin-bold text-104">UPLOAD IMAGES</h1>
        </div>


      </v-tab-item>
    </v-tabs-items>

    <div class="section-2">
      <v-container>
        <div>
          <v-tabs class="d-flex justify-center" v-model="tab">
            <v-tab class="mx-2">Digital Brochures</v-tab>
            <v-tab class="mx-2">Before / After</v-tab>
            <v-tab class="mx-2">Upload Images</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <!-- <img src="../assets/Digital Brochures/Collections.png" /> -->
                    <v-col lg="4" cols="12" v-for="(item, index) in marketingData" :key="item.id">
                      <div class="image-container mt-md-16">
                        <v-img style="border-radius: 0 32px 0 0;" height="300"
                          :src="require(`../assets/Marketing-Materials/${item.img}`)"></v-img>

                        <!-- <v-img :src="require(item.img)"></v-img> -->

                      </div>
                      <div class="d-flex justify-space-between mt-md-8">
                        <p class="PPRadioGrotesk-regular font-weight-bold text-22 ">{{ item.name }}</p>
                        <a :href="`./_nuxt/assets/Marketing-Materials/pdf/${item.file}`" download
                          :title="'Download ' + item.file">
                          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                            <title>download-circle-outline</title>
                            <path
                              d="M8 17V15H16V17H8M16 10L12 14L8 10H10.5V6H13.5V10H16M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z" />
                          </svg>
                        </a>
                      </div>

                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>

            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <v-col lg="4" cols="12" v-for="(item, index) in pagedItems" :key="item.id">
                      <div class="image-container mt-md-16" @mouseleave="stopDragging($event, index)">
                        <img height="300" :src="item.attributes.ImageBefore.data.attributes.url"
                          @mousemove="handleMouseMove($event, index)" @touchmove="handleMouseMove($event, index)" />
                        <div class="dynamic-width" :style="{ width: imagePositions[index] + 'px' }">
                          <img @mousemove="handleMouseMove($event, index)" @touchmove="handleMouseMove($event, index)"
                            height="300" width="391px" :src="item.attributes.ImageAfter.data.attributes.url" />
                        </div>
                        <div class="draggable" :style="{ left: imagePositions[index] + 'px' }"
                          @mousedown="startDragging($event, index)" @touchstart="startDragging($event, index)">
                        </div>
                      </div>
                      <div class="d-flex justify-space-between mt-md-8">
                        <p class="PPRadioGrotesk-regular font-weight-bold text-22 ">{{ item.attributes.Title }}</p>
                        <a :href="'https://cms.coverstyl.com/download-before-after?id=' + item.id" download=""
                          target="_blank">
                          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24">
                            <title>download-circle-outline</title>
                            <path
                              d="M8 17V15H16V17H8M16 10L12 14L8 10H10.5V6H13.5V10H16M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z" />
                          </svg>
                        </a>
                      </div>
                    </v-col>
                    <v-pagination v-model="currentPage" :length="numPages" @input="changePage"
                      color="primary"></v-pagination>
                  </v-row> </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-form class="py-8 px-8 Form rounded mt-5"
                style="background-color: #eee8df;border-radius: 20px !important;">
                <div>
                  <v-row>
                    <v-col cols="12" md="12">
                      <span class="text-14">You are*</span>
                      <v-select class="my-selective mt-2" v-model="formData.youAre" :items="options"
                        label="Select an option" name="youare" solo hide-details="true"
                        style="font-size: 12px;"></v-select>
                    </v-col>
                    <v-col md="6" cols="12">
                      <span class="text-14 ">Name*</span>
                      <v-text-field class="mt-2" v-model="formData.name" hide-details="true" name="name" solo
                        style="font-size: 12px;"></v-text-field>
                    </v-col>
                    <v-col md="6" cols="12">
                      <span class="text-14 ">First Name</span>
                      <v-text-field class="mt-2" v-model="formData.firstName" hide-details="true" name="firstName" solo
                        style="font-size: 12px;"></v-text-field>
                    </v-col>
                    <v-col md="6" cols="12">
                      <span class="text-14">Phone</span>
                      <v-text-field class="mt-2" v-model="formData.phone" hide-details="true" name="phone" solo
                        style="font-size: 12px;"></v-text-field>
                    </v-col>
                    <v-col md="6" cols="12">
                      <span class="text-14 ">Country*</span>
                      <v-text-field class="mt-2" v-model="formData.country" hide-details="true" name="country" solo
                        style="font-size: 12px;"></v-text-field>
                    </v-col>
                    <v-col md="6" cols="12">
                      <span class="text-14 ">Postal Code*</span>
                      <v-text-field class="mt-2" v-model="formData.postalCode" hide-details="true" name="postalCode"
                        solo style="font-size: 12px;"></v-text-field>
                    </v-col>
                    <v-col md="12" cols="12">
                      <span class="text-14 ">E-mail address*</span>
                      <v-text-field class="mt-2" v-model="formData.emailAddress" hide-details="true" name="email" solo
                        style="font-size: 12px;"></v-text-field>
                    </v-col>
                    <v-col md="12" cols="12">
                      <span class="text-14 ">Project description*</span>
                      <v-textarea class="mt-2" v-model="formData.projectDescription" hide-details="true"
                        name="projectDescription" solo rows="4" style="font-size: 12px;"></v-textarea>

                    </v-col>
                    <v-col md="12">
                      <span class="text-14">Upload Images*</span>
                      <input type="file" class="mt-2" name="images" ref="fileInput" multiple @change="handleFileUpload">
                    </v-col>
                  </v-row>
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
            </v-tab-item>
          </v-tabs-items>
        </div>

      </v-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import beforeAfter from "~/Public/beforeAfter.json";
import marketingMaterials from "~/Public/marketingData.json";
export default {
  head() {
    return {
      title: 'Distinction Wrapping Resources',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Distinction Wrapping Resources is your premier destination for high-quality wrapping solutions. We offer extensive products and services tailored to meet diverse wrapping needs."
        }
      ],

    }
  },
  data() {
    return {
      marketingData: [],
      dataList: [],
      tab: 0,
      imageHeight: 100,
      isDragging: false,
      startPosition: { x: 180 },
      imagePositions: Array(10).fill(180), // Initialize positions for 10 images
      perPage: 18, // Show 18 items per page initially
      currentPage: 1,
      options: ['Residential Customer','Commercial Customer'
      ],
      showDialog: false, // Add this property to control error dialog visibility
      showThanksDialog: false, // Add this property to control thank you dialog visibility
      selectedItem: null,
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
        images: []
      }
    };
  },
  computed: {
    numPages() {
      return Math.ceil(this.dataList.length / this.perPage);
    },
    pagedItems() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.dataList.slice(startIndex, endIndex);
    },
  },
  methods: {
    handleFileUpload(event) {
      // Clear previous uploaded images
      this.formData.images = [];

      // Retrieve files from input
      const files = event.target.files;

      // Loop through each file
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Convert file to URL
        const reader = new FileReader();
        reader.onload = (e) => {
          // Push URL to formData.images array
          this.formData.images.push(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
    async submitForm() {
      // Validate form fields
      if (!this.formData.youAre) {
        this.showDialog = true;
        return;
      }

      try {
        // Make POST request to Formspree endpoint
        const response = await axios.post('https://formspree.io/f/xeqyzebk', this.formData);

        if (response.status === 200) {
          // Show "Thank You" dialog
          this.showThanksDialog = true;
        } else {
          // Show error dialog
          this.showDialog = true;
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        // Show error dialog
        this.showDialog = true;
      }
    },
    handleMouseMove(event, index) {
      const newWidth = event.clientX - event.target.getBoundingClientRect().left;
      this.$set(this.imagePositions, index, Math.min(newWidth, 375));
    },
    startDragging(event, index) {
      if (event.type === 'touchstart') {
        event.preventDefault(); // Prevent scrolling while dragging
        const touch = event.touches[0];
        this.startPosition.x = touch.clientX - this.imagePositions[index];
      } else {
        this.startPosition.x = event.clientX - this.imagePositions[index];
      }

      this.isDragging = true;
      this.draggedIndex = index;

      document.addEventListener('mousemove', this.whileDragging);
      document.addEventListener('touchmove', this.whileDragging);

      document.addEventListener('mouseup', this.stopDragging);
      document.addEventListener('touchend', this.stopDragging);
    },
    whileDragging(event) {
      let clientX;
      if (event.type === 'touchmove') {
        const touch = event.touches[0];
        clientX = touch.clientX;
      } else {
        clientX = event.clientX;
      }

      if (this.isDragging && typeof this.draggedIndex === 'number') {
        let newPositionX = clientX - this.startPosition.x;
        this.$set(this.imagePositions, this.draggedIndex, Math.max(0, Math.min(375, newPositionX)));
      }
    },
    stopDragging() {
      this.isDragging = false;
      this.draggedIndex = null;

      document.removeEventListener('mousemove', this.whileDragging);
      document.removeEventListener('touchmove', this.whileDragging);

      document.removeEventListener('mouseup', this.stopDragging);
      document.removeEventListener('touchend', this.stopDragging);
    },
    changePage(page) {
      this.currentPage = page;
      // Reset image positions when changing pages
      this.imagePositions = Array(this.perPage).fill(180);
    },
  },
  mounted() {
    this.dataList = beforeAfter.props.pageProps.compares.data;
    this.marketingData = marketingMaterials.marketingMaterials
  },
};
</script>



<style>
.draggable {
  position: absolute;
  top: 0;
  left: 180px;
  z-index: 3;
  border: 3px solid white;
  height: 100%;
}

.draggable::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-left: 3px solid white;
  height: 100%;
}

.draggable::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  /* Adjust the size of the circle as needed */
  height: 50px;
  /* Adjust the size of the circle as needed */
  border-radius: 50%;
  background-color: white;
  background-image: url('../assets/before_after.svg');
  background-size: 70%;
  /* Adjust the size of the background image */
  background-position: center;
  /* Center the background image */
  z-index: 1;
  /* Ensure the circle is above the line */
  cursor: pointer;
}


.section-1 {
  padding: 104px 0 80px
}

.section-1 h1 {
  font-size: 80px;
  font-weight: 900;
  text-transform: uppercase;
}

.section-1 p {
  font-size: 19px;
}


.section-2 .v-tab {
  background-color: rgba(21, 26, 40, .07);
  border-radius: 24px;
}

.section-2 .v-tab--active {
  background-color: black !important;
  color: #eee8d5 !important;
}

.section-2 .v-tabs-slider-wrapper {
  display: none;
}

.image-container {
  position: relative;
  width: 391px;
  max-width: 100%;
  overflow: hidden;
}


/* .section-2 .image-container img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 0 32px 0 0;
    
  } */

.dynamic-width {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100% !important;
  border-radius: 0px;
  overflow: hidden;
}

.image-container {
  position: relative;
  width: 391px;
  max-width: 100%;
  overflow: hidden;
}

.contact_BTN {
  background-color: rgba(21, 26, 40, .07) !important;
  color: black !important;
  border-radius: 48px;
  border: none !important;
  text-transform: capitalize !important;
}

.contact_BTN:hover {
  background-color: #D2E823 !important;
}

@media only screen and (max-width: 600px) {
  .section-1 {
    padding: 0px;
    padding-top: 60px;
  }

  .section-1 h1 {
    font-size: 36px;
    font-weight: 900;
    text-transform: uppercase;
    padding-bottom: 20px;
  }

}
</style>