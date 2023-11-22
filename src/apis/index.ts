// 从 '../utils/request' 路径导入 'req' 函数。
// 假设 'req' 是一个封装了 HTTP 请求的工具函数，可能使用了 axios、fetch 或其他 HTTP 客户端。
import req from '../utils/request'

/**
 * 测试接口
 */

// 定义一个名为 'TestApi' 的函数，用于执行 HTTP GET 请求。
// 这个函数被导出，所以它可以在其他文件中被导入和使用。
export const TestApi = () => 
    // 调用 'req' 函数，传递请求的 URL 和方法。
    // 这里 URL 是 '/api/test'，方法是 'get'。
    req({ url: '/api/test', method: 'get' })
