import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Contact from "@/views/Contact.vue"
import Produk from "@/views/Produk.vue"
import Detail from "@/views/Detail.vue"
import DetailKategori from "@/views/DetailKategori.vue"
import Kategori from "@/views/Kategori.vue";

const routes = [
    {path: "/", name: "Home", component: Home},
    {path: "/about", name: "About", component: About},
    {path: "/contact", name: "Contact", component: Contact},
    {path: "/produk", name: "Produk", component: Produk},
    {path: "/kategori", name: "Kategori", component: Kategori},
    {path: "/detail/:id_produk", name: "Detail", component: Detail, props: true},
    {path: "/detail_kategori/:id_kategori", name: "DetailKategori", component: DetailKategori, props: true}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;