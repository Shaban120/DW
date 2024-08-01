<template>
    <div>
        <v-container class="my-md-16 my-8">
        <v-row>
            <v-col lg="4">
                <p class="text-16 poppins-regular">PROMO VIDEO</p>
                <h2 class="text-42 belgin-bold pr-2">The world's most desirable kitchens</h2>
                <div class="border my-4"></div>
                <h4 class="py-3 text-24 poppins-medium">Step Into Luxury Living</h4>
                <p class="py-2 text-14 poppins-regular">Discover stunning kitchen transformations designed to make your home extraordinary. Let's create your dream kitchen together!</p>
                <v-btn color="black white--text" class="text-capitalize py-5" elevation="0">More Videos <v-icon
                        class="ps-2">mdi-arrow-right</v-icon></v-btn>
            </v-col>
            <v-col cols="12" lg="8">
                <!-- <v-img :src="require('../assets/kitchen-interior.png')">
                    <img class="play-btn" src="../assets/play-button.png" />
                </v-img> -->
                <div class="youtube-embed-wrapper">
      <div class="youtube-embed">
        <iframe
          width="100%"
          height="480px"
          src="https://www.youtube.com/embed/2TARtaBRZ0g"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
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
.border{
    width: 100px;background-color: black ;height: 4px;
}
.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.youtube-embed-wrapper {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.youtube-embed {
  width: 100%;
  height: 480px;
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
</style>