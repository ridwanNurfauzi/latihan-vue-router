import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Contact from "@/views/Contact.vue"
import Produk from "@/views/Produk.vue"
import Detail from "@/views/Detail.vue"
import DetailKategori from "@/views/DetailKategori.vue"
import Kategori from "@/views/Kategori.vue";

import PageNotFound from "../views/PageNotFound.vue";
import Login from "../views/Login.vue";

const routes = [
    {path: "/", name: "Home", component: Home},
    {path: "/about", name: "About", component: About},
    {path: "/contact", name: "Contact", component: Contact},
    {path: "/produk", name: "Produk", component: Produk,
    beforeEnter: (to, from, next) =>{
        const loggedInUser = localStorage.getItem('loggedIn');
        // const loggedInUser = users.find((user) => {
        //     user.isLoggenIn == true
        // });
        if (loggedInUser == 'true') {
            next();
        }
        else{
            alert("Anda harus login terlebih dahulu.");
            next('/login');
        }
    }
},
    {path: "/kategori", name: "Kategori", component: Kategori},
    {path: "/detail/:id_produk", name: "Detail", component: Detail, props: true},
    {path: "/detail_kategori/:id_kategori", name: "DetailKategori", component: DetailKategori, props: true},
    {path: "/login", name: "LoginPage", component: Login, props: true},
    {path: "/:pathMatch(.*)*", name: "PageNotFound", component: PageNotFound}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;