import { reactive, toRefs } from 'vue';

export default {
  name: 'LoginForm',
  setup() {
    const credentials = reactive({
      username: '',
      password: '',
    });

    function submit() {
      // 这里应该有调用后端API进行登录验证的代码
      console.log('Submitted:', credentials);
    }

    // 将响应式对象转换为引用以在模板中使用
    return {
      ...toRefs(credentials),
      submit,
    };
  },
};
