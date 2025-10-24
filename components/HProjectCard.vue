<template>
    <v-card :color="color">
        <div class="d-flex">
            <v-img class="align-center" width="100px" :src="image"></v-img>
            <div class="d-flex flex-column">
                <v-card-title>{{ title }}</v-card-title>
                <v-card-text>{{ description }}</v-card-text>
            </div>
        </div>

    </v-card>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    description: String,
    image: String,
    color: String
})
</script>