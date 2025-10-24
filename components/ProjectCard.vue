<template>
    <v-card :color="color" max-width="45%">
        <v-img class="align-end text-white" height="200" :src="image" cover></v-img>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{ description }}</v-card-text>
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