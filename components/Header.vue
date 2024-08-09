<template>
  <div>
    <!-- DESKTOP NAVBAR -->
    <v-app-bar color="#ffffff" dense height="auto" class="desktop-nav">
      <v-container class="d-flex align-center">
      <v-toolbar-title>
        <nuxt-link to="/">
          <a><img class="my-3 logo_img" width="170px" :src="require('../assets/DW Logo Black.svg')" /></a>
        </nuxt-link>
      </v-toolbar-title>
      <div class="mx-auto">
        <nuxt-link to="/services"> <v-btn class="text-13 black--text" text>Services</v-btn>
        </nuxt-link>
        <nuxt-link to="/solution">
          <v-btn class="text-13 black--text" text>Solutions</v-btn>
        </nuxt-link>
        <nuxt-link to="/before">
          <v-btn class="text-13 black--text" text>Before / After</v-btn>
        </nuxt-link>
        <nuxt-link to="/collection/wood">
          <v-btn class="text-13 black--text" text>Vinyl collections</v-btn>
        </nuxt-link>
        
      </div>
      <div>
        <a href="tel:+44 7913 225766">
          <v-btn style="background-color: white;" outlined class="text-13 black--text" text>
            +44 7913 225766
            <v-icon class="ml-3">mdi-phone</v-icon>
          </v-btn>
        </a>
<a href="https://wa.me/447913225766" target="_blank">
  <v-btn class="whatsapp-btn text-13" outlined text>
    WhatsApp Chat
    <v-icon class="ml-3">mdi-whatsapp</v-icon>
  </v-btn>
</a>

        <!-- <nuxt-link to="/contact">
          <v-btn style="background-color: black;" class="text-13 white--text" text>Contact</v-btn>
        </nuxt-link> -->

        
      </div>
    </v-container>
    </v-app-bar>

    <!-- MOBILE NAVBAR -->

    <v-app-bar height="auto" class="mbl-navbar" color="#ffffff" dense>
      <v-toolbar-title class="mobile-title">
        <nuxt-link to="/"><a><img class="pt-2" width="120px" :src="require('../assets/DW Logo Black.svg')" /></a></nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <a href="tel:+44 7913 225766">
          <v-btn style="background-color: white;" outlined class="text-13 black--text" text>
            <!-- +44 7913 225766 -->
            <v-icon class="">mdi-phone</v-icon>
          </v-btn>
        </a>

<a href="https://wa.me/447913225766" target="_blank">
  <v-btn class="whatsapp-btn ml-4" outlined text>
    <!-- WhatsApp Chat -->
    <v-icon class="">mdi-whatsapp</v-icon>
  </v-btn>
</a>   
          <!-- <v-spacer></v-spacer> -->

      <div class="text-right">
        <v-app-bar-nav-icon class="mbl-nav-icon"  @click="toggleMenu"></v-app-bar-nav-icon>
      </div>
    </v-app-bar>
    <!-- MOBILE NAVBAR -->

    <!-- MOBILE NAVIGATION DRAWER -->
    <v-navigation-drawer width="100%" v-if="showMenu" class="mbl-navbar" v-model="showMenu">
      <v-list>
        <v-list-item link>
          <nuxt-link to="/collection/wood">
            <v-btn class="text-13 black--text" text>Products</v-btn></nuxt-link>
        </v-list-item>
        <v-list-item link>
          <nuxt-link to="/services">
            <v-btn class="text-13 black--text" text>Services</v-btn>
          </nuxt-link>
        </v-list-item>
        <v-list-item link>
          <nuxt-link to="/resources">
            <v-btn text>Resources</v-btn>
          </nuxt-link>
        </v-list-item>



        <v-list-item link>
          <nuxt-link to="/contact">
            <v-btn text>Contact</v-btn>
          </nuxt-link>
        </v-list-item>
        <v-list-item link>
          <v-btn text>EN <v-icon>mdi-arrow-down</v-icon>
          </v-btn>
        </v-list-item>


      </v-list>
    </v-navigation-drawer>
    <!-- MOBILE NAVBAR -->

  </div>
 
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      showDialog: false

    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu; // Toggle the menu state
    }
  }
}
</script>

<style lang="scss" scoped>
.mbl-navbar {
  display: none;
}

/*.hover-effect {
  transition: transform 0.3s ease-in-out;
}

 Define the transformation on hover 
.hover-effect:hover {
  transform: scale(1.1);
   Scale up the image by 10% 
}*/

.content-container {
  position: fixed;
  top: 17%;
  left: 0;
  width: 100%;
  height: fit-content;
  z-index: 1000;

}

.dialog-wrapper {
  background-color: #ffffff;
  /* Background color of the dialog */
  padding: 20px;

}

.dialog-content {
  max-width: 100%;
}


@media only screen and (max-width: 767px) {
  .mbl-navbar {
    display: block;
  }

  .mbl-nav-icon {
    display: block !important;
  }

  .desktop-nav {
    display: none !important;
  }

  .mobile-title {
    display: flex;
    align-items: center;
  }

  .mobile-title {
    justify-content: space-between;
  }
}
</style>


<style>
  .whatsapp-btn {
    background-color: #25D366;
    color: white;
    transition: background-color 0.3s, color 0.3s;
  }
  .whatsapp-btn:hover {
    background-color: #1C9F54;
    color: white;
  }
  .whatsapp-btn .v-icon {
    color: white;
    transition: color 0.3s;
  }
  .whatsapp-btn:hover .v-icon {
    color: white;
  }
</style>

