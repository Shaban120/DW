<template>
    <div>
        <v-container class="my-md-16 my-8">
            <v-row>
                <v-col>
                    <p class="text-18 black--text poppins-regular mb-0">OUR PROMISE</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <h2 class="text-42 belgin-bold">Distinction Wrapping Vinyl Wrapping Services</h2>
                    <div class="border my-3"></div>
                    <p class="text-22 poppins-medium">Dedicated to Excellence Every Step of the Way</p>
                    <nuxt-link to="/contact">
                    <v-btn color="black" class="text-capitalize py-5 white--text">Contact Us<v-icon
                            class="pl-3">mdi-arrow-right</v-icon></v-btn>
                        </nuxt-link>
                </v-col>
                <v-col md="6">
                    <!-- <p class="text-16 poppins-regular mt-4">At our core, we are driven by a passion for excellence. We promise to exceed your expectations with our unwavering commitment to quality and attention to detail. With our skilled team and innovative approach, we guarantee outstanding results that will transform your space. From concept to completion, trust us to bring your vision to life with precision and care.
</p> -->
<v-list dense class="bulleted-list">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            • Adds a touch of glamour, smoothness and sophistication to spaces. 
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            • Ideal for both residential and commercial applications.
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            • Available in various colours and textures to suit your aesthetic.
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            • Perfect for enhancing the appearance of interior and exterior surfaces.
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            • Suitable for walls, furniture, doors, and other architectural elements.
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            • Extremely durable and easy to maintain, ensuring long-lasting beauty.
        </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
                    
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
.border {
    height: 4px;
    width: 100px !important;
    background: black ;
}
.bulleted-list .v-list-item-content {
    list-style-type: disc;
}
</style>
<style>
.v-list-item--dense .v-list-item__title, .v-list-item--dense .v-list-item__subtitle, .v-list--dense .v-list-item .v-list-item__title, .v-list--dense .v-list-item .v-list-item__subtitle {
    font-size: 0.921rem !important;
    }
</style>