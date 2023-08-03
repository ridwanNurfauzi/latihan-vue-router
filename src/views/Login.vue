<template>
    <div class="min-w-full min-h-[100vh] flex flex-col">
        <div
            class="bg-slate-200 flex flex-col justify-center sm:rounded-3xl flex-grow sm:flex-grow-0 sm:w-[500px] sm:my-auto sm:mx-auto p-10">
            <h2 class="mb-5 font-semibold text-3xl text-center">Login</h2>
            <form @submit.prevent="login">
                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input id="username" name="username" placeholder="Masukan username . . ."
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text" v-model="username"> <br>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input id="password" name="password" placeholder="Masukan password . . ."
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text" v-model="password">
                <button type="submit"
                    class="text-white my-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Masuk
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { users } from '../assets/User';

// console.log (users)

export default {
    data() {
        return {
            username: 'user2',
            password: 'password2'
        }
    },
    methods: {
        login() {
            const foundUser = users.find(user =>
                user.username == this.username &&
                user.password == this.password
            );
            const foundUserIndex = users.findIndex(e => {
                return (
                    e.username == this.username
                )
            })
            if (foundUser) {
                console.info("login berhasil")
                // console.info()
                // users[foundUserIndex].isLoggedIn = true;
                // console.info(users);
                localStorage.setItem('loggedIn', 'true');
                this.$router.push('/produk');

                // location.href = '/';
                // window.history.pushState({current: '/produk', replaced: true}, "Produk", "/produk");
            }
            else console.info("login gagal")
            console.info(foundUser)
        }
    },
    setup(props, context) {
        onMounted(() => {
            context.emit("id-menu", 0)
        })
    }
}

</script>