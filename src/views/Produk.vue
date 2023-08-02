<template>
    <div class="px-4">
        <div class="container mx-auto">
            <h1 class="font-semibold text-center my-3 text-2xl">
                Produk
            </h1>
            <div class="flex flex-wrap justify-center">
                <div v-for="produk in state" :key="produk.id" class="card group">
                    <router-link class="container" :to="{ name: 'Detail', params: { id_produk: produk.id } }">
                        <div class="w-[200px] h-[200px] flex flex-col overflow-hidden content-center justify-center">
                            <img v-bind:src="produk.imgUrl"
                                class="shrink-0 min-h-full min-w-full object-cover group-hover:scale-125 transition-all group-hover:opacity-80"
                                :alt="produk.nama">
                        </div>
                        <h4 class="font-semibold text-center my-3">{{ produk.nama }}</h4>
                        <p class="text-sm text-gray-600 m-2">{{ namaKategori(produk.id_kategori) }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { produk } from '../assets/Produk';
import { kategori } from '../assets/Kategori';

export default {
    setup(props, context) {
        // const state = reactive(produk.produk.filter(e=>{return e.id_kategori == 2}));
        const state = reactive(produk.produk);
        const namaKategori = (y)=>{
            let namaKategoriTxt = kategori.kategori.find((x)=>{
                return x.id == y;
            }).nama;
            return namaKategoriTxt;
        }
        
        onMounted(() => {
            context.emit("id-menu", 4)
        })

        return {
            state,
            namaKategori
        }
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

/* .container {
    padding: 2px 16px;
} */
</style>