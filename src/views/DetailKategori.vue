<template>
    <div>
        <div>
        </div>
        <!-- <h4>{{ detail.harga }}</h4> -->
        <div v-if="detail == undefined">
            <h3 class="font-semibold text-center my-3 text-2xl">Kategori dengan id '{{ id_kategori }}' tidak ditemukan.</h3>
        </div>
        <div v-else-if="dataProduk.length == 0">
            <h3 class="font-semibold text-center my-3 text-2xl">Kategori '{{ detail.nama }}' tidak memiliki data produk.</h3>
        </div>
        <div v-else>
            <h1 class="font-semibold text-center my-3 text-2xl">Kategori {{ detail.nama }}</h1>
            <div class="flex flex-wrap justify-center">
                <div v-for="produk in dataProduk" :key="produk.id" class="card group">
                    <router-link class="container" :to="{ name: 'Detail', params: { id_produk: produk.id } }">
                        <div class="w-[200px] h-[200px] flex flex-col overflow-hidden content-center justify-center">
                            <img v-bind:src="produk.imgUrl"
                                class="shrink-0 min-h-full min-w-full object-cover group-hover:scale-125 transition-all group-hover:opacity-80"
                                :alt="produk.nama">
                        </div>
                        <h4 class="font-semibold text-center my-3">{{ produk.nama }}</h4>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { produk } from "@/assets/Produk"
import { kategori } from '../assets/Kategori';
import { produk } from '../assets/Produk';

export default {
    props: [
        "id_kategori"
    ],
    setup(props) {
        const detail = kategori.kategori.find((item) => {
            return item.id == props.id_kategori;
        });
        // const dataProduk = 0;
        let dataProduk;
        if (detail != undefined) {
            dataProduk = produk.produk.filter(e => {
                return detail.id == e.id_kategori;
            });

        }
        return {
            detail,
            dataProduk
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