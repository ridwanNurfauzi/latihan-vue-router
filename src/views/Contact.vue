<template>
    <div class="px-4">
        <div class="container mx-auto">
            <h1 class="font-semibold text-xl">
                Ini Halaman contact
            </h1>
        </div>
    </div>
</template>


<script>
import { onMounted } from 'vue';

export default {
    setup(props, context) {
        onMounted(() => {
            context.emit("id-menu", 2)
        })
    }
}
</script>