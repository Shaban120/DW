<template>
  <div>
    <!-- DESKTOP NAVBAR -->
    <v-app-bar fixed color="#ffffff" dense height="auto" class="desktop-nav">
      <v-container class="d-flex align-center">
      <v-toolbar-title>
        <nuxt-link to="/">
          <a><img width="170" height="auto" alt="Logo" class="my-3 logo_img"  :src="require('../assets/DW Logo Black.svg')" /></a>
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
        <a href="tel:+44 7723 011006">
          <v-btn style="background-color: white;" outlined class="text-13 black--text" text>
            +44 7723 011006
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
        <nuxt-link to="/"><a><img class="pt-2" width="120" height="auto" alt="Logo"  :src="require('../assets/DW Logo Black.svg')" /></a></nuxt-link>
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
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1146929096411211');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1146929096411211&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
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

