<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center">
                <img src="/icon.png" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Web</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto mx-auto" id="navbar-default">
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <router-link to="/" v-bind:class="setNavClass(rl_1)" aria-current="page">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/contact" v-bind:class="setNavClass(rl_2)">
                            Contact
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about" v-bind:class="setNavClass(rl_3)">
                            About
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/produk" v-bind:class="setNavClass(rl_4)">
                            Produk
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/kategori" v-bind:class="setNavClass(rl_5)">
                            Kategori
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- <div>
        <ul>
            <li><router-link :class="{ active: rl_1 }" to="/">Home</router-link></li>
            <li><router-link :class="{ active: rl_2 }" to="/contact">Contact</router-link></li>
            <li><router-link :class="{ active: rl_3 }" to="/about">About</router-link></li>
            <li><router-link :class="{ active: rl_4 }" to="/produk">Produk</router-link></li>
            <li><router-link :class="{ active: rl_5 }" to="/kategori">Kategori</router-link></li>
        </ul>
    </div> -->
</template>

<script>
import { ref } from 'vue';
export default {
    props: {
        idMenu: Number
    },
    data() {
        return {
            setNavClass(e) {
                let txt = '';
                if (e) {
                    txt = "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";
                    return txt;
                }
                else {
                    txt = "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
                    return txt;
                }
            }
        }
    },
    setup(props) {
        const rl_1 = ref(false);
        const rl_2 = ref(false);
        const rl_3 = ref(false);
        const rl_4 = ref(false);
        const rl_5 = ref(false);

        if (props.idMenu == 1) {
            rl_1.value = true;
            rl_2.value = false;
            rl_3.value = false;
            rl_4.value = false;
            rl_5.value = false;
        }
        else if (props.idMenu == 2) {
            rl_1.value = false;
            rl_2.value = true;
            rl_3.value = false;
            rl_4.value = false;
            rl_5.value = false;
        }
        else if (props.idMenu == 3) {
            rl_1.value = false;
            rl_2.value = false;
            rl_3.value = true;
            rl_4.value = false;
            rl_5.value = false;
        }
        else if (props.idMenu == 4) {
            rl_1.value = false;
            rl_2.value = false;
            rl_3.value = false;
            rl_4.value = true;
            rl_5.value = false;
        }
        else if (props.idMenu == 5) {
            rl_1.value = false;
            rl_2.value = false;
            rl_3.value = false;
            rl_4.value = false;
            rl_5.value = true;
        }

        return {
            rl_1,
            rl_2,
            rl_3,
            rl_4,
            rl_5
        }
    }
}
</script>
<!-- 
<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #111;
}

.active {
    background-color: #4CAF50;
}</style> -->
