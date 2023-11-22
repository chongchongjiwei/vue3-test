<template>
    <div class="login-container">
      <form @submit.prevent="submit">
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
  
  <script lang="ts" src="./useLoginForm.ts"></script>
  <!-- <style src="./loginFormStyles.css" scoped></style> -->
  