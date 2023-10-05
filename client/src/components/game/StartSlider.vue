<template>
    <div class="starter-container">
        <h1
            class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            It's Time to choose your firsts factories</h1>
        <div class="slider-container">
            <div class="slider-item" v-for="(item, index) in items" :key="index" v-on:click="handleItemClicked(item)">
                <img :src="item.illustration" alt="logo" />
                <div class="slider-item-content">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Product, Products } from '../../../../server/src/global/implements';
import { computed, defineEmits, defineProps } from 'vue';

const props = defineProps<{
    start: boolean,
    currentStep: number
}>();


const emit = defineEmits<{
    itemClicked: [product: Product]
}>();

const handleItemClicked = (product: Product): void => {
    emit('itemClicked', product);
};

const firstChoice: any[] = [
    { id: Products.Wood, illustration: "https://cdn.discordapp.com/attachments/1158387777868660736/1159071706435047465/DALLE_2023-10-03_16.52.57_-_create_a_piece_of_wood_in_pixel_art_16x16.png?ex=652fb0a5&is=651d3ba5&hm=6ff7af24655e0f9829ebdeed95314eeaf47b373b99f06119b18e1a6f21675d6a&", description: 'test', title: "Wood" },
    { id: Products.Stone, illustration: "https://static.vecteezy.com/system/resources/previews/022/285/230/original/sharp-stone-in-pixel-art-style-vector.jpg", description: 'Hellooooo', title: "Stone" },
];

const secondChoice: any[] = [
    { id: Products.CBD, illustration: "https://media.istockphoto.com/id/1489332998/vector/plant-aloe-vera-cosmetic-game-pixel-art-vector-illustration.jpg?s=612x612&w=is&k=20&c=NmtKUdYO5IH8ANy8a17Y_mXxK6TISxcWG1Z9E1tVsdg=", description: 'test', title: "CBD" },
    { id: Products.Weed, illustration: "https://img.freepik.com/vecteurs-premium/herbe-cannabis-style-pixel-art_475147-322.jpg?w=2000", description: 'Hellooooo', title: "Weed" },
];

const thirdChoice: any[] = [
    { id: Products.Water, illustration: "https://cdn.discordapp.com/attachments/1158387777868660736/1159470081735131156/DALLE_2023-10-03_16.52.54_-_create_a_water_drop_in_pixel_art_16x16.png?ex=653123a9&is=651eaea9&hm=ad73e046a9c86daa37c6870bcfca33275717dde675875057f362e4c3f2d0a830&", description: 'To water your plaaaaannnnt', title: "Water" },
    { id: Products.Fertilizer, illustration: "https://cdn.discordapp.com/attachments/1158387777868660736/1159470322274279484/DALLE_2023-10-03_16.52.47_-_create_a_fertiliser_bag_in_pixel_art_16x16.png?ex=653123e2&is=651eaee2&hm=37d46fbcdf7ce3cf8766e977f053f4ab8eba77e1f6474ae8db57dc4f17c8b4f7&", description: 'Hehehehehehe', title: "Fertilizer" },
];

const items = computed(() => {
    switch (props.currentStep) {
        case 1:
            return firstChoice;
        case 2:
            return secondChoice;
        case 3:
            return thirdChoice;
        default:
            return firstChoice;
    }
});




</script>

<style lang="scss">
.starter-container {
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    z-index: 100;
    right: 0;
    background: rgba(0, 0, 0, 0.5);

    .slider-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        width: 100%;

        .slider-item {
            width: 300px;
            height: 300px;
            cursor: pointer;
            border-radius: 5px;
            transition: all 0.3s ease-in-out;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            margin-top: 40px;

            img {
                min-width: 100%;
                min-height: 100%;
                object-fit: cover;
                border-radius: 5px;
            }

            &:hover {
                transform: scale(1.02);

                .slider-item-content {
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: center;
                    align-items: center;
                    opacity: 1;
                    padding: 20px;
                    text-align: center;

                    h3 {
                        font-size: 1.5rem;
                        font-weight: 700;
                        margin-bottom: 10px;
                    }
                }
            }

            .slider-item-content {
                display: none;
                opacity: 0;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                border-radius: 5px;
                transition: all 0.3s ease-in-out;
            }
        }
    }
}
</style>