<template>
    <div v-if="detail == undefined">
        <h3 class="font-semibold text-center my-3 text-2xl">
            Detail produk dengan id '{{ id_produk }}' tidak ditemukan</h3>
    </div>
    <div v-else>
        <h1 class="font-semibold text-center my-3 text-xl">{{ detail.nama }}</h1>
        <div class="flex flex-wrap justify-center">
            <div>
                <img :src="detail.imgUrl" width="400" :alt="detail.nama">
            </div>
            <div>
                <p>Harga : {{ detail.harga }}</p>
                <p>Kategori : {{ getKategori(detail.id_kategori).nama }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { produk } from "../assets/Produk"
import { kategori } from "../assets/Kategori";

export default {
    props: [
        "id_produk"
    ],
    setup(props) {
        const detail = produk.produk.find((item) => {
            return item.id == props.id_produk;
        });
        const getKategori = (y)=>{
            let namaKategoriTxt = kategori.kategori.find((x)=>{
                return x.id == y;
            });
            return namaKategoriTxt;
        }
        return {
            detail,
            getKategori
        }
    }
}
</script>