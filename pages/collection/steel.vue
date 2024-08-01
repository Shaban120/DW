<template>
    <div>
        <v-container class="mt-md-10 mt-6">
            <CollectionComponent />
            <v-row>
                <v-col md="6" cols="12">
                    <div class="Collection_Header">
                        <h1 class="belgin-bold">Steel</h1>
                    </div>
                </v-col>
                <v-col md="6" cols="12">
                    <div class="Collection_Header">
                        <p class="poppins-regular">Whether it's with a rust or aluminum effect, materials and textures are present in our Steel range. Add a silver or gold touch to your interior. Are you leaning towards an industrial look? The sheet metal or carbon fiber effect will be ideal.</p>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="6" cols="12">
                    <v-text-field v-model="searchQuery" rounded prepend-inner-icon="mdi-magnify" placeholder="Search"
                        outlined hide-details></v-text-field>

                </v-col>
                <v-col md="6" cols="12" class="text-md-right">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn class="collection-btn" text v-bind="attrs" v-on="on">
                                Categories
                                <v-icon>
                                    mdi-menu-down
                                </v-icon>
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item @click="selectItemForCategory('All')">
                                <v-list-item-title>All</v-list-item-title>
                            </v-list-item>
                            <v-list-item v-for="(category, index) in categories" :key="index"
                                @click="selectItemForCategory(category)">
                                <v-list-item-title>{{ category }}</v-list-item-title>
                            </v-list-item>
                        </v-list>

                    </v-menu>

                    <v-btn class="collection-btn" text>
                        Finishes
                        <v-icon>
                            mdi-menu-down
                        </v-icon>
                    </v-btn>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn class="collection-btn" text v-bind="attrs" v-on="on">
                                stretchable
                                <v-icon>
                                    mdi-menu-down
                                </v-icon>
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item @click="selectItemForStretchable('stretchable')">
                                <v-list-item-title>stretchable</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="selectItemForStretchable('non-stretchable')">
                                <v-list-item-title>non stretchable</v-list-item-title>
                            </v-list-item>
                        </v-list>

                    </v-menu>

                    <v-btn class="collection-btn" text>
                        avalability
                        <v-icon>
                            mdi-menu-down
                        </v-icon>
                    </v-btn>


                </v-col>

            </v-row>
            <v-row>
                <v-col v-for="(item, index) in pagedItems" :key="index" :md="getColWidth(index)"
                    :cols="getColWidthForSm(index)">
                    <div class="wood-item" @click="navigateToPage(item)">
                        <img class="mb-md-2 mb-0" :src="item.attributes.Image.data.attributes.url" width="100%" />
                        <div class="wood-item-content">
                            <div>
                                <h2 class="ref belgin-bold text-24 font-weight-regular">{{ item.attributes.Ref }}</h2>
                            </div>
                            <div class="reference_Categories">
                                <v-btn class="btn PPRadioGrotesk-medium" text>{{
                        item.attributes.product_category.data.attributes.Name }}</v-btn>
                                <v-btn class="btn PPRadioGrotesk-medium" text>{{
                        item.attributes.product_finishing.data.attributes.Name }}</v-btn>
                            </div>
                        </div>
                        <h3 class="PPRadioGrotesk-regular mt-2 mt-md-0 name">{{ item.attributes.Name }}</h3>
                        <p v-if="item.attributes.Stretchable" class="text-14 poppins-regular mb-0">Stretchable</p>
                    </div>
                </v-col>
            </v-row>
            <v-pagination class="mt-md-10" v-model="currentPage" :length="numPages" @input="changePage" />
        </v-container>
    </div>
</template>

<script>
import steelData from "~/Public/steelData.json";
import CollectionComponent from "../../components/CollectionComponent.vue";

export default {
    head() {
    return {
      title: 'Distinction Wrapping Steel Floor Sheets',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Distinction Wrapping's Steel floor sheets come in many styles, from rusty to shiny. Get a silver or gold look for a fancy feel, or choose sheet metal or carbon fiber for a factory-like style."
        }
      ]
    }
  },
    data() {
        return {
            dataList: steelData,
            currentPage: 1,
            perPage: 18,
            totalItems: 0,
            searchQuery: "",
            selectedCategory: "",
            selectedStretchable: "", // New property to store selected stretchable option
        };
    },
    computed: {
        numPages() {
            return Math.ceil(this.filteredItems.length / this.perPage); // Use filteredItems instead of totalItems
        },
        categories() {
            const uniqueCategories = new Set(this.dataList.props.pageProps.products.steelData.map(item => item.attributes.product_category.data.attributes.Name));
            return Array.from(uniqueCategories);
        },
        filteredItems() {
            let filteredItems = this.dataList.props.pageProps.products.steelData;
            filteredItems = this.filterBySearch(filteredItems);
            filteredItems = this.filterByCategory(filteredItems);
            return filteredItems;
        },
        pagedItems() {
            const startIndex = (this.currentPage - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            return this.filteredItems.slice(startIndex, endIndex);
        },
    },
    methods: {
        filterBySearch(items) {
            return items.filter(item => {
                return item.attributes.Name.toLowerCase().includes(this.searchQuery.toLowerCase());
            });
        },
        filterByCategory(items) {
            return items.filter(item => {
                let categoryMatch = true;
                if (this.selectedCategory) {
                    categoryMatch = item.attributes.product_category && item.attributes.product_category.data && item.attributes.product_category.data.attributes && item.attributes.product_category.data.attributes.Name === this.selectedCategory;
                }
                let stretchableMatch = true;
                if (this.selectedStretchable) {
                    stretchableMatch = item.attributes.Stretchable === (this.selectedStretchable === "stretchable");
                }
                return categoryMatch && stretchableMatch;
            });
        },
        selectItemForCategory(category) {
            if (category === 'All') {
                this.selectedCategory = '';
            } else {
                this.selectedCategory = category;
            }
            this.currentPage = 1; // Reset pagination to first page
        },
        selectItemForStretchable(option) {
            this.selectedStretchable = option;
            this.currentPage = 1; // Reset pagination to first page
        },
        changePage(page) {
            this.currentPage = page;
        },
        navigateToPage(item) {
            this.$router.push({ path: `/collection/steel/${item.attributes.slug}` });
        },
        getColWidth(index) {
            if (index === 0 || index === this.pagedItems.length - 1) {
                return 6;
            } else {
                return 3;
            }
        },
        getColWidthForSm(index) {
            if (index === 0 || index === this.pagedItems.length - 1) {
                return 12;
            } else {
                return 6;
            }
        }
    },
    mounted() {
        this.totalItems = this.dataList.props.pageProps.products.steelData.length;
    },
    watch: {
        filteredItems() {
            this.currentPage = 1; // Reset pagination to first page when filters change
        }
    },
    components: {
        CollectionComponent
    }
};
</script>



<style lang="scss">


.Collection_Header {
    padding: 72px 0 160px;
}

.Collection_Header h1 {
    font-size: 104px;
    font-weight: 900;
    line-height: 1.1;
    text-transform: uppercase;
}

.Collection_Header p {
    font-size: 15px;
    font-weight: 300
}



.wood-item img {
    border-radius: 0 40px 0 0;height: 288px;
}

.wood-item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.wood-item-content .ref {
    font-size: 24px;
}

.wood-item .name {
    font-size: 18px;
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

@media only screen and (max-width: 768px) {

    .collection-btn {
        margin: 10px;
        text-transform: capitalize;
    }

    .Collection_Header {
        padding: 10px 0 10px;
    }

    .Collection_Header h1 {
        font-size: 56px;
        font-weight: 900;
        line-height: 1.1;
        text-transform: uppercase;
    }

    .Collection_Header p {
        font-size: 15px;
        font-weight: 300
    }

    .wood-item-content {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: normal;


    }

    .wood-item-content .ref {
        font-size: 24px;
    }

    .wood-item .name {
        font-size: 16px;
    }

    .reference_Categories {
        display: flex;
        gap: 8px;
        justify-content: right
    }

    .reference_Categories .btn {
        height: 16px;
        border-radius: 16px;
        font-size: 10px;
        padding: 0px 10px !important;
    }

    .text-24 {
        font-size: 14px !important
    }
}
</style>
