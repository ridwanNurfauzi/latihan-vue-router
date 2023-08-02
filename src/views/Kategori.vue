<template>
    <div class="px-4">
        <div class="container mx-auto">
            <h1 class="font-semibold text-center my-3 text-2xl">
                Kategori</h1>
            <div class="flex flex-wrap justify-center">
                <div v-for="kategori in data" :key="kategori.id" class="card group transition-all">
                    <router-link class="" :to="{ name: 'DetailKategori', params: { id_kategori: kategori.id } }">
                        <div class="w-[200px] h-[200px] flex flex-col overflow-hidden content-center justify-center">
                            <img v-bind:src="kategori.imgUrl"
                                class="shrink-0 min-h-full min-w-full object-cover group-hover:scale-125 transition-all group-hover:opacity-80"
                                :alt="kategori.nama">
                        </div>

                        <h4 class="font-semibold text-center my-3">{{ kategori.nama }}</h4>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { kategori } from '../assets/Kategori';

export default {
    setup(props, context) {
        const data = reactive(kategori.kategori)
        onMounted(() => {
            context.emit("id-menu", 5);
        });

        return {
            data
        };
    }
}
</script>

<style scoped>
.flex-container {
    display: flex;
    flex-wrap: wrap;
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* 
.container {
    padding: 2px 16px;
} */</style>