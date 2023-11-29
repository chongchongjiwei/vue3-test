export const useCountStore = defineStore("count",()=>{
    const count = ref(0);
    // computed计算属性 → getters
    const double = computed(() => {
    return count.value * 2;
  });
  // function函数 → actions
    function increment() {
    count.value++;
    }
    return {count,double,increment};
})