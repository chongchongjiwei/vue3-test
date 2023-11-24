<template>
  <div class="login-container">
    <form @submit.prevent="submitForm">
      <div>
        <label for="username">账号：</label>
        <input type="text" id="username" v-model="credentials.username" required>
      </div>
      <div>
        <label for="password">密码：</label>
        <input type="password" id="password" v-model="credentials.password" required>
      </div>
      <div>
        <button type="submit">登录</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useLoginForm } from './useLoginForm.ts';

export default defineComponent({
  name: 'Login',
  setup() {
    const { credentials, submitForm } = useLoginForm();
    return {
      credentials,
      submitForm
    };
  }
});
</script>

<style>
/* 这里可以添加CSS样式 */
.login-container {
  /* 样式定义 */
}
</style>
