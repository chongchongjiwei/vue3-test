<!-- src/App.vue -->
<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";

import { useCountStore } from "@/store/counter";
const counterStore = useCountStore();
</script>

<template>
  <h1 class="text-3xl">vue3-element-admin-父组件</h1>
  <el-button type="primary" @click="counterStore.increment">count++</el-button>
  <HelloWorld />
</template>
