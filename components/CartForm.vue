<template>
    <div>
        <v-form class="my-5 Form">
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field hide-details="true" name="name" solo placeholder="Name"
                        style="font-size: 12px;"></v-text-field>
                </v-col>
                <v-col md="6">
                    <v-text-field hide-details="true" name="email" solo placeholder="Email"
                        style="font-size: 12px;"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field hide-details="true" name="Phone Number" solo placeholder="Phone Number"
                        style="font-size: 12px;"></v-text-field>
                </v-col>
                <v-col md="6">
                    <v-text-field hide-details="true" name="Subject" solo placeholder="Subject"
                        style="font-size: 12px;"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="12">
                    <v-text-field hide-details="true" name="Meassage" class="elevation-0" dense solo
                        placeholder="Message" style="font-size: 12px;"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="12" class="my-5">
                    <v-btn type="submit" style="justify-content: space-between;" block color="black white--text"
                        class="text-capitalize py-5" elevation="0">Submit Enquiry<v-icon
                            class="pr-auto">mdi-arrow-right</v-icon></v-btn>
                </v-col>
            </v-row>
        </v-form>
        
    </div>
</template>

<script>
export default {
    data() {

        return {}
    }
}
</script>

<style lang="scss" scoped></style>