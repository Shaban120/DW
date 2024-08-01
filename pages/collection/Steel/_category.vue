<template>
    <div>
        <div v-for="item in Products" :key="item.id">
            <div class="product_item">
                <div class="left_side">
                    <img class="product_img" :src="item.attributes.Image.data.attributes.url" alt="Product Image" />
                </div>
                <div class="right_side mt-md-16">
                    <div class="header_content">
                        <div>
                            <h1 class="text-24 belgin-bold">{{ item.attributes.Name }}</h1>
                        </div>
                        <div class="reference_Categories">
                            <v-btn class="pa-0 btn PPRadioGrotesk-medium" text>{{
            item.attributes.product_category.data.attributes.Name
        }}</v-btn>
                            <v-btn class="pa-0 btn PPRadioGrotesk-medium" text>{{
                item.attributes.product_finishing.data.attributes.Name
            }}</v-btn>
                        </div>
                    </div>
                    <hr class="mb-md-10 mt-md-5 my-5" />
                    <div class="content_body">
                        <h1 class="text-64 belgin-bold mb-md-2">{{ item.attributes.Ref }}</h1>
                        <p class="text-18 PPRadioGrotesk-medium">Downloads</p>
                        <div class="download_data">
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="#151A28" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M8 12l4 4 4-4M12 16V8" />
                                    </g>
                                </svg>
                                <p class="PPRadioGrotesk-medium text-18">
                                    <a class="black--text"
                                        :href="'https://ssi.s3.fr-par.scw.cloud/cover-styl/web/technical-sheets/en/' + item.attributes.slug + '.pdf'"
                                        target="_blank" rel="nofollow">
                                        Technical Data
                                    </a>
                                </p>

                            </div>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="#151A28" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M8 12l4 4 4-4M12 16V8" />
                                    </g>
                                </svg>
                                <p class="PPRadioGrotesk-medium">
                                    <a class="black--text"
                                        :href="'https://cms.coverstyl.com/product-actions/download-scans?id=' + item.id">
                                        Scan
                                    </a>
                                </p>


                            </div>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="#151A28" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M8 12l4 4 4-4M12 16V8" />
                                    </g>
                                </svg>
                                <p class="PPRadioGrotesk-medium">
                                    <a class="black--text"
                                        :href="'https://cms.coverstyl.com/product-actions/download-photos?id=' + item.id">

                                        Photos</a>
                                </p>
                            </div>
                            <v-btn class="belgin-bold sample-btn mt-md-10" @click="navigateToCartPage(item)">Request a
                                Sample</v-btn>
                        </div>
                        <div class="photos_data">
                            <img src="" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- Add more data to display as needed -->
        </div>
    </div>
</template>

<script>
import jsonData from "~/Public/steelData.json";

export default {
    data() {
        return {
            Products: [] // Initialize Products as an empty array
        };
    },
    methods: {
        navigateToCartPage(item) {

            this.$router.push({ path: `/cart/${item.attributes.slug}` })
        },
        getObjectByCategory(category) {
            const steelData = jsonData.props.pageProps.products.steelData;
            this.Products = steelData.filter(obj => obj.attributes.slug === category);
            if (this.Products.length === 0) {
                console.log("No matching objects found for the category:", category);
            }
        }
    },
    mounted() {
        const category = this.$route.params.category;
        console.log(category);
        this.getObjectByCategory(category);
    }
};
</script>

<style scoped>
.product_item {
    display: flex;
    width: 100%;
}

.product_item .left_side {
    width: 50%;
}

.product_item .right_side {
    width: 50%;
    padding-right: 90px;
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

.product_img {
    border-radius: 0 160px 0 0;
    width: 80%;
    height: 651px;
}

.header_content {
    display: flex;
    justify-content: space-between;
}

.download_data {
    display: inline-flex;
    flex-flow: column;
    border-radius: 12px;
    padding: 8px 24px 8px 16px;
    background-color: #fff;
}

.download_data div {
    display: flex;
    gap: 0.5em;
}

.sample-btn {
    border-radius: 48px;
    font-size: 20px;
    padding: 32px !important;
    background-color: #d2e823 !important;
}

@media only screen and (max-width: 768px) {
    .product_item {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .product_item .left_side {
        width: 100%;
    }

    .product_img {
        border-radius: 0 160px 0 0;
        width: 100%;
        height: 400px;
    }

    .product_item .right_side {
        margin-top: 5%;
        width: 100%;
        padding: 0px 12px;
    }

    .text-24 {
        font-size: 14px
    }

    .reference_Categories .btn {
        height: 16px;
        border-radius: 16px;
        font-size: 10px !important;
        padding: 0px 10px !important;
    }

    .text-64 {
        font-size: 48px !important;
    }

    .text-18 {
        font-weight: 400 !important;
        font-size: 16px !important;
    }
}
</style>