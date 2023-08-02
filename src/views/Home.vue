<template>
    <div class="px-4">
        <div class="container mx-auto">
            <h1 class="font-semibold text-xl">
                Ini Halaman home
            </h1>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
    setup(props, context) {
        onMounted(() => {
            context.emit("id-menu", 1)
        })
    }
}
</script>