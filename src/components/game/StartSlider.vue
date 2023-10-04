<template>
    <div class="starter-container container">
        <p>It's time to choose your first resource to produce</p>
        <div class="slider-container">
            <div class="slider-item" v-for="(item, index) in items" :key="index" v-on:click="handleClickItem(item.id)">
                <img :src="item.image" alt="logo" />
                <div class="slider-item-content">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    id: 0,
                    title: 'Wood',
                    description: 'Wood is a resource that can be gathered from trees. It is used to build structures and craft items.',
                    image: 'https://cdn.discordapp.com/attachments/1158387777868660736/1159071706435047465/DALLE_2023-10-03_16.52.57_-_create_a_piece_of_wood_in_pixel_art_16x16.png?ex=651e8d25&is=651d3ba5&hm=606703238170b8dddde8722c5761d98bc6df6deb418408fc187a9b99bf125db3&'
                },
                {
                    id: 1,
                    title: 'Stone',
                    description: 'Stone is a resource that can be gathered from rocks. It is used to build structures and craft items.',
                    image: 'https://static.vecteezy.com/system/resources/previews/022/285/230/original/sharp-stone-in-pixel-art-style-vector.jpg'
                }
            ]
        }
    },
    methods: {
        handleClickItem(id) {
            console.log(id)
        }
    }
}
</script>
<style lang="scss">
.starter-container {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.5);

    .slider-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        width: 100%;

        .slider-item {
            padding: 1rem;
            width: 400px;
            height: 400px;
            cursor: pointer;
            border-radius: 5px;
            transition: all 0.3s ease-in-out;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 5px;
            }

            &:hover {
                transform: scale(1.02);

                .slider-item-content {
                    display: block;
                    opacity: 1;
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
                padding: 1rem;
                transition: all 0.3s ease-in-out;
            }
        }
    }
}
</style>