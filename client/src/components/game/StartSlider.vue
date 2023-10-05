<template>
    <div class="starter-container">
        <h1
            class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            It's Time to choose your first factory</h1>
        <div class="slider-container">
            <div class="slider-item" v-for="(item, index) in items" :key="index" v-on:click="handleItemClicked(item)">
                <img :src="item.illustration" alt="logo" />
                <div class="slider-item-content">
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Product, Products } from '../../../../server/src/global/implements';

defineProps<{
    start: boolean
}>();

const emit = defineEmits<{
    itemClicked: [product: Product]
}>();

const handleItemClicked = (product: Product): void => {
    emit('itemClicked', product);
};



let items: Product[] = [
    { name: Products.CBD, illustration: "", description: 'test', price: 10 },
    { name: Products.Fertilizer, illustration: "", description: 'Hellooooo', price: 20 },

];

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
</style>../../../../global/implements