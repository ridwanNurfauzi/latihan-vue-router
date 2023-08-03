<template>
    <div class="container">
        <h2 class="text-center text-2xl font-semibold">
            404 Page Not Found
        </h2>
    </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
    setup(props, context) {
        onMounted(() => {
            context.emit("id-menu", (-1))
        })
    }
}
</script>