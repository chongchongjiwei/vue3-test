<template>
    <h1>Page 第四个页面</h1>
    <button @click="handleClick">Home</button>
</template>
 
<script lang="ts" setup>
import { useRouter } from 'vue-router';
 
const router = useRouter()
const handleClick = () => router.push({ path: '/' })

</script>