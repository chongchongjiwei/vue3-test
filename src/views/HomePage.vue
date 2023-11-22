<template>
    <h1>Home</h1>
</template>
 
<script lang="ts" setup>
import { TestApi } from '../apis'
 
TestApi().then(res => console.log(res)).catch(err => console.log(err))
</script>