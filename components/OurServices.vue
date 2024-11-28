<template>
  <div>
    <v-container class="my-md-16 my-8 services-container">
      <v-row>
        <v-col>
          <p class="text-18 black--text poppins-regular">WHAT WE OFFER</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="belgin-bold text-48">Our Services</h2>
        </v-col>
        <v-col md="6" class="text-md-right">
          <nuxt-link to="/contact">

          <v-btn color="black" class="text-capitalize py-5 white--text mt-md-4">Contact Us<v-icon
              class="pl-3">mdi-arrow-right</v-icon></v-btn>
              </nuxt-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="item in dataArray" :key="item.id" md="4" cols="12">
          <v-card elevation="0">
            <img width="100%" height="256px" alt="services" :src="require(`../assets/services/${item.side_img}`)" />
            <div class="pa-2">
              <h3 class="text-24 poppins-semibold text-capitalize">{{ item.category }}</h3>
              <p class="text-16 poppins-regular">{{ item.text }}</p>
              <p @click="gotoCategory(item)">
                <v-btn color="black" class="text-capitalize py-5 white--text">
                  View More
                  <v-icon class="pl-3">mdi-arrow-right</v-icon>
                </v-btn>
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataArray: [
        { id: 2, bannerImg: 'bannerimg3.jpg', side_img: 'bannerimg3.jpg', category: 'hotels', text:
         'Protect and enhance your Hotels exterior aesthetics with our durable and stylish wrapping services.', buttonText: 'Contact Us', explanation: "Hotels, often referred to as mobile homes or RVs (Recreational Vehicles), are compact yet versatile vehicles designed for travel and temporary accommodation. These mobile dwellings provide a convenient and flexible way to explore the world, offering a self-contained living space equipped with essential amenities such as sleeping quarters, a kitchenette, and a bathroom. Hotels come in various sizes and configurations, ranging from small camper trailers towed behind vehicles to larger motorhomes with built-in engines for independent travel. They are popular among travelers seeking freedom and adventure, allowing them to journey to remote destinations while still enjoying the comforts of home. Hotels often feature innovative design elements to maximize space efficiency, including foldable furniture, multi-purpose storage solutions, and cleverly designed interiors. Additionally, modern Hotels may include amenities such as air conditioning, entertainment systems, and solar panels for off-grid living. Whether used for weekend getaways, extended road trips, or even full-time living, Hotels offer a unique and adventurous way to experience the world while maintaining a sense of comfort and convenience on the road." },
         { id: 1, bannerImg: 'bannerimg5.avif', side_img: 'Services (5).png', category: 'kitchens', text: 'Elevate your kitchen with our customized wrapping solutions for a stunning makeover.', buttonText: 'Contact Us', explanation: "Kitchens are the bustling epicenters of homes, where culinary creativity unfolds and communal connections thrive. These versatile spaces are meticulously designed for the art of cooking, equipped with essential appliances like stoves, ovens, and refrigerators, alongside ample storage solutions in cabinets and pantries. From sleek modern layouts to charmingly rustic designs, kitchens are as diverse in style as they are in functionality, tailored to suit the unique tastes and needs of homeowners. Beyond their practical roles, kitchens serve as social hubs, fostering conversations and camaraderie among family members and guests alike. Islands and breakfast bars provide not only additional workspace but also opportunities for casual dining and mingling. Moreover, kitchens promote healthy living by encouraging the preparation of home-cooked meals and fostering an appreciation for fresh, nutritious ingredients. With their seamless blend of form and function, kitchens enrich the daily lives of inhabitants, offering spaces where culinary passion and communal spirit converge in harmony.Efficient storage solutions, including cabinets, drawers, and pantry space, help to keep kitchen essentials organized and accessible." },
         { id: 6, bannerImg: 'bannerimg4.avif', side_img: 'Services (3).png', category: 'office spaces', text: 'Create a professional and inviting workspace with our tailored wrapping solutions.', buttonText: 'Contact Us', explanation: "Office spaces are dedicated environments within buildings where work-related activities are conducted. These areas are designed to facilitate productivity, collaboration, and creativity among employees. Office layouts can vary from traditional cubicles and private offices to open-plan designs with shared workstations and communal areas. Essential elements of office spaces include desks, chairs, computers, and storage solutions, tailored to meet the needs of different tasks and job roles. Additionally, office spaces often incorporate meeting rooms, conference areas, and breakout spaces to accommodate discussions, presentations, and informal gatherings. Design considerations such as lighting, acoustics, and ergonomic furniture are crucial for creating comfortable and functional work environments that promote well-being and efficiency. Furthermore, modern office spaces may feature amenities like lounges, kitchens, and recreational areas to enhance employee satisfaction and work-life balance. With the rise of remote work and flexible schedules, some organizations are embracing hybrid office models that combine in-person and remote collaboration, requiring adaptable spaces that support both traditional and virtual work setups." },

        { id: 3, bannerImg: 'bannerimg6.jpg', side_img: 'Services (4).png', category: 'parkhomes', text: 'Beautify and protect your parkhome with our high-quality wrapping options for lasting appeal.', buttonText: 'Contact Us', explanation: "Park homes, also known as mobile homes or manufactured homes, are residential structures designed for permanent or semi-permanent placement in designated communities or parks. These homes are prefabricated in factories and then transported to their intended locations, where they are typically placed on leased land within specialized parks or communities. Park homes come in various sizes and configurations, ranging from single-wide units to larger double-wide or triple-wide models. They are often designed to resemble traditional site-built homes and can feature modern amenities such as full kitchens, bathrooms, and living areas. Park home communities may offer shared amenities and facilities such as recreational areas, swimming pools, and clubhouses, fostering a sense of community among residents. These homes provide an affordable housing option for individuals and families seeking a more flexible lifestyle or retirement living in a community-oriented environment. Additionally, park homes offer the convenience of single-level living with the added benefit of mobility, allowing homeowners to relocate if desired while maintaining ownership of their dwelling. However, it's important to note that park home living may involve certain regulations and fees." },
      { id: 4, bannerImg: 'bannerimg2.avif', side_img: 'Services (6).png', category: 'bathrooms', text: 'Revitalize your bathroom with our professional wrapping services for a refreshed look.', buttonText: 'Contact Us', explanation: "Bathrooms are essential spaces within homes, dedicated to personal hygiene, grooming, and relaxation. These functional areas are equipped with fixtures such as toilets, sinks, showers, and/or bathtubs, designed to meet the diverse needs of individuals. Bathrooms come in various sizes and styles, ranging from compact powder rooms to luxurious spa-like retreats, each tailored to optimize comfort and functionality. In addition to their practical functions, bathrooms serve as private sanctuaries where people can unwind and rejuvenate, whether through a refreshing shower or a leisurely soak in the tub. Thoughtful design elements such as lighting, ventilation, and storage solutions enhance the ambiance and usability of bathrooms, creating inviting and efficient spaces. Furthermore, bathrooms play a crucial role in promoting health and well-being by facilitating daily hygiene routines and providing a clean and sanitary environment. Overall, bathrooms are integral parts of homes that combine utility with relaxation, offering respite and rejuvenation in the midst of busy daily life." },

      {id: 5, bannerImg: 'bannerimg1.avif', side_img: 'Services (1).png', category: 'bedrooms', text: 'Transform your bedroom into a tranquil oasis retreat with our innovative wrapping services.', buttonText: 'Contact Us', explanation: "Bedrooms are intimate sanctuaries within homes, designed primarily for rest and relaxation. They serve as personal retreats where individuals retreat to unwind and recharge after a long day. The layout and decor of bedrooms often reflect the unique tastes and personalities of their occupants, ranging from minimalist to opulent designs.Typically furnished with a bed, wardrobe, and bedside tables, bedrooms are functional spaces optimized for comfort and convenience. The bed, often the focal point, is where individuals spend a significant portion of their time, emphasizing the importance of quality mattresses and bedding for a good night's sleep.In addition to sleep, bedrooms facilitate various activities such as reading, meditation, or watching television, offering a versatile space for leisure. Many people also personalize their bedrooms with decorative elements like artwork, photographs, or plants, creating a cozy ambiance reflective of their style.Bedrooms often incorporate elements of privacy and seclusion, providing a sense of security and tranquility away from the hustle and bustle of the outside world. Proper lighting, including natural light and adjustable fixtures, is crucial for setting the mood." },    
      ]
    };
  },
  methods: {
    gotoCategory(item) {
      console.log('fsdafdsf', item)
      this.$store.commit('CATEGORY', item);
      this.$router.push({ path: `services/${item.category}`})
    }
  }
};
</script>

<style lang="scss" scoped>
.services-container {
  margin-top: 0px !important;
}
</style>