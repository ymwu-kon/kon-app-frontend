// http.js
import axios from "axios";

// 创建axios实例
const http = axios.create({
    baseURL: "https://kon-app-backend.vercel.app", // 设置统一的请求前缀
    timeout: 10000, // 设置统一的超时时长
});

// 请求拦截器
http.interceptors.request.use(
    config => {
        // 在这里可以添加一些请求前的操作，比如添加Token到headers
        // config.headers.Authorization = "Bearer your-token";
        return config;
    },
    error => {
        // 请求错误处理
        return Promise.reject(error);
    }
);

// 响应拦截器
http.interceptors.response.use(
    response => {
        // 在这里可以添加一些响应后的操作，比如对返回数据的处理
        if (response.status === 200) {
            return response.data;
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        // 响应错误处理
        if (error.response) {
            // 服务器返回的错误
            console.error("服务器错误:", error.response.status);
        } else if (error.request) {
            // 请求未得到响应
            console.error("请求未响应");
        } else {
            // 设置请求时触发的错误
            console.error("请求错误:", error.message);
        }
        return Promise.reject(error);
    }
);

export default http;
