import { reactive, toRefs } from 'vue';

export function useLoginForm() {

  const state = reactive({
    credentials: {
      username: '',
      password: ''
    }
  });

  const submitForm = () => {
    // 这里可以添加调用后端API进行登录验证的代码
    console.log('Form Submitted:', state.credentials);
    // 处理登录逻辑
  };

  return {
    ...toRefs(state),
    submitForm
  };
}
